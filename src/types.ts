
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

export type ChatMessage = {
  role: 'user' | 'ai' | 'admin';
  text: string;
};
