
export interface Message {
  id: string;
  sender: string;
  text: string;
  time: string;
  isMe: boolean;
  isAdmin?: boolean;
}

export interface ChatSession {
  id: string;
  company: string;
  messages: Message[];
  status: 'online' | 'waiting' | 'closed';
  lastActivity: string;
}

class ChatService {
  private sessions: Record<string, ChatSession> = {};
  private listeners: ((sessions: Record<string, ChatSession>) => void)[] = [];

  constructor() {
    const saved = localStorage.getItem('techlabs_chats');
    if (saved) {
      this.sessions = JSON.parse(saved);
    } else {
      // Sessão inicial de exemplo
      this.sessions = {
        'NB-FIN': {
          id: 'NB-FIN',
          company: 'NORTHBRIDGE FINANCIAL',
          status: 'online',
          lastActivity: new Date().toLocaleTimeString(),
          messages: [
            { id: '1', sender: 'John Doe', text: 'Olá, estamos com lentidão no endpoint de auth.', time: '14:01', isMe: false }
          ]
        }
      };
      this.save();
    }
    
    // Escutar mudanças em outras abas
    window.addEventListener('storage', (e) => {
      if (e.key === 'techlabs_chats') {
        this.sessions = JSON.parse(e.newValue || '{}');
        this.notify();
      }
    });
  }

  private save() {
    localStorage.setItem('techlabs_chats', JSON.stringify(this.sessions));
    this.notify();
  }

  private notify() {
    this.listeners.forEach(l => l(this.sessions));
  }

  subscribe(callback: (sessions: Record<string, ChatSession>) => void) {
    this.listeners.push(callback);
    callback(this.sessions);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  sendMessage(sessionId: string, text: string, sender: string, isAdmin: boolean = false) {
    if (!this.sessions[sessionId]) {
      this.sessions[sessionId] = {
        id: sessionId,
        company: sessionId,
        status: 'online',
        lastActivity: new Date().toLocaleTimeString(),
        messages: []
      };
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      sender,
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: isAdmin,
      isAdmin
    };

    this.sessions[sessionId].messages.push(newMessage);
    this.sessions[sessionId].lastActivity = newMessage.time;
    this.save();
  }

  getSessions() {
    return this.sessions;
  }
}

export const chatService = new ChatService();
