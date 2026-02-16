
import sys

corrections = {
    "src/components/layout/Navigation.tsx": {
        4: "import { NAV_ITEMS } from '@/constants';"
    },
    "src/pages/Governance.tsx": {
        3: "import { DETAILED_PAGES } from '@/constants';"
    },
    "src/pages/OurTeam.tsx": {
        3: "import { DETAILED_PAGES } from '@/constants';"
    },
    "src/pages/PressRoom.tsx": {
        3: "import { DETAILED_PAGES } from '@/constants';"
    },
    "src/pages/Security.tsx": {
        3: "import { DETAILED_PAGES } from '@/constants';"
    },
    "src/pages/StartConsultation.tsx": {
        16: "import { createCoraCheckoutSession } from '@/services/coraService';"
    },
    "src/pages/admin/AdminActiveRooms.tsx": {
        5: "import AdminSidebar from '@/components/admin/AdminSidebar';"
    },
    "src/pages/admin/AdminDashboard.tsx": {
        4: "import AdminSidebar from '@/components/admin/AdminSidebar';"
    },
    "src/pages/admin/AdminRecordings.tsx": {
        4: "import AdminSidebar from '@/components/admin/AdminSidebar';"
    },
    "src/pages/admin/AdminScheduleMeeting.tsx": {
        5: "import AdminSidebar from '@/components/admin/AdminSidebar';"
    },
    "src/pages/admin/AdminSessions.tsx": {
        5: "import AdminSidebar from '@/components/admin/AdminSidebar';"
    },
    "src/pages/admin/AdminSupportChat.tsx": {
        8: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        9: "import { chatService, ChatSession } from '@/services/chatService';"
    },
    "src/pages/client/ClientSupportChat.tsx": {
        9: "import ClientSidebar from '@/components/client/ClientSidebar';",
        10: "import { chatService, Message } from '@/services/chatService';"
    },
    "src/pages/client/Dashboard.tsx": {
        15: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "src/pages/client/Invoices.tsx": {
        20: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "src/pages/client/Meeting.tsx": {
        16: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "src/pages/client/Projects.tsx": {
        15: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "src/pages/client/ScheduleCall.tsx": {
        15: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "src/pages/client/Settings.tsx": {
        14: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "src/pages/client/Support.tsx": {
        16: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "src/pages/client/TicketView.tsx": {
        20: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "src/pages/services/AIScaling.tsx": {
        3: "import { DETAILED_PAGES } from '@/constants';"
    },
    "src/pages/services/CloudStrategy.tsx": {
        3: "import { DETAILED_PAGES } from '@/constants';"
    },
    "src/pages/services/SystemsDesign.tsx": {
        3: "import { DETAILED_PAGES } from '@/constants';"
    },
    "src/pages/services/TechAudit.tsx": {
        3: "import { DETAILED_PAGES } from '@/constants';"
    },
    "teste/admin/AdminActiveRooms.tsx": {
        5: "import AdminSidebar from '@/components/admin/AdminSidebar';"
    },
    "teste/admin/AdminClients.tsx": {
        11: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        12: "import { clientService } from '@/services/client.service';"
    },
    "teste/admin/AdminDashboard.tsx": {
        8: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        10: "import { api } from '@/services/api';"
    },
    "teste/admin/AdminDiagnostics.tsx": {
        11: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        13: "import { auditService as diagnosticService, TechnicalReport as DiagnosticReport } from '@/services/audit.service';"
    },
    "teste/admin/AdminDiagnosticsReport.tsx": {
        11: "import AdminSidebar from '@/components/admin/AdminSidebar';"
    },
    "teste/admin/AdminInfrastructure.tsx": {
        7: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        8: "import { useInfraSync } from '@/hooks/useInfraSync';"
    },
    "teste/admin/AdminLogin.tsx": {
        5: "import { useAuth } from '@/context/AuthContext';"
    },
    "teste/admin/AdminMeetingSetup.tsx": {
        11: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        12: "import { clientDataService, Meeting } from '@/services/clientDataService';"
    },
    "teste/admin/AdminNewProject.tsx": {
        9: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        10: "import { projectService } from '@/services/project.service';",
        11: "import { auditService } from '@/services/audit.service';",
        12: "import { useAnalysisStream } from '@/hooks/useAnalysisStream';"
    },
    "teste/admin/AdminProjects.tsx": {
        7: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        8: "import { projectService } from '@/services/project.service';",
        9: "import { Project } from '@/services/clientDataService';"
    },
    "teste/admin/AdminProposalGenerator.tsx": {
        8: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        9: "import { api } from '@/services/api';"
    },
    "teste/admin/AdminRecordings.tsx": {
        4: "import AdminSidebar from '@/components/admin/AdminSidebar';"
    },
    "teste/admin/AdminRepository.tsx": {
        11: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        12: "import { repositoryService } from '@/services/repository.service';"
    },
    "teste/admin/AdminScheduleMeeting.tsx": {
        5: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        6: "import { clientDataService } from '@/services/clientDataService';"
    },
    "teste/admin/AdminSessions.tsx": {
        5: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        6: "import { clientDataService, Meeting } from '@/services/clientDataService';"
    },
    "teste/admin/AdminSupportChat.tsx": {
        7: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        8: "import { chatService } from '@/services/chatService';",
        9: "import { useChatSync } from '@/hooks/useChatSync';"
    },
    "teste/admin/AdminTickets.tsx": {
        10: "import AdminSidebar from '@/components/admin/AdminSidebar';",
        11: "import { ticketService } from '@/services/ticket.service';"
    },
    "teste/client/AuditResult.tsx": {
        10: "import ClientSidebar from '@/components/client/ClientSidebar';",
        11: "import { clientDataService, Project } from '@/services/clientDataService';"
    },
    "teste/client/ClientNewProject.tsx": {
        8: "import ClientSidebar from '@/components/client/ClientSidebar';",
        9: "import { projectService } from '@/services/project.service';",
        10: "import { auditService } from '@/services/audit.service';"
    },
    "teste/client/ClientProposals.tsx": {
        8: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "teste/client/ClientSupportChat.tsx": {
        9: "import ClientSidebar from '@/components/client/ClientSidebar';",
        10: "import { chatService, Message } from '@/services/chatService';",
        11: "import { useChatSync } from '@/hooks/useChatSync';"
    },
    "teste/client/ConsultationCheckout.tsx": {
        8: "import ClientSidebar from '@/components/client/ClientSidebar';",
        9: "import { auditService, TechnicalReport } from '@/services/audit.service';",
        10: "import { projectService } from '@/services/project.service';"
    },
    "teste/client/ConsultationTypeSelection.tsx": {
        5: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "teste/client/Dashboard.tsx": {
        7: "import ClientSidebar from '@/components/client/ClientSidebar';",
        8: "import { api } from '@/services/api';",
        9: "import { Project } from '@/services/clientDataService';"
    },
    "teste/client/DetailedReport.tsx": {
        12: "import ClientSidebar from '@/components/client/ClientSidebar';",
        13: "import { clientDataService, Project } from '@/services/clientDataService';"
    },
    "teste/client/DiagnosticDetail.tsx": {
        9: "import ClientSidebar from '@/components/client/ClientSidebar';",
        10: "import { auditService as diagnosticService, TechnicalReport as DiagnosticReport } from '@/services/audit.service';"
    },
    "teste/client/DiagnosticHistory.tsx": {
        5: "import ClientSidebar from '@/components/client/ClientSidebar';",
        6: "import { auditService, TechnicalReport } from '@/services/audit.service';"
    },
    "teste/client/Invoices.tsx": {
        13: "import ClientSidebar from '@/components/client/ClientSidebar';",
        14: "import { clientDataService, InvoiceResponse } from '@/services/clientDataService';"
    },
    "teste/client/Meeting.tsx": {
        8: "import ClientSidebar from '@/components/client/ClientSidebar';",
        9: "import { clientDataService, Meeting as MeetingType } from '@/services/clientDataService';"
    },
    "teste/client/ProjectDetail.tsx": {
        10: "import ClientSidebar from '@/components/client/ClientSidebar';",
        11: "import { clientDataService, Project } from '@/services/clientDataService';"
    },
    "teste/client/Projects.tsx": {
        16: "import ClientSidebar from '@/components/client/ClientSidebar';",
        17: "import { clientDataService, Project } from '@/services/clientDataService';"
    },
    "teste/client/ScheduleCall.tsx": {
        10: "import ClientSidebar from '@/components/client/ClientSidebar';",
        11: "import { clientDataService } from '@/services/clientDataService';"
    },
    "teste/client/Settings.tsx": {
        12: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "teste/client/Support.tsx": {
        8: "import ClientSidebar from '@/components/client/ClientSidebar';",
        9: "import { clientDataService, Ticket } from '@/services/clientDataService';"
    },
    "teste/client/TicketView.tsx": {
        20: "import ClientSidebar from '@/components/client/ClientSidebar';"
    },
    "teste/components/layout/Footer.tsx": {
        5: "import { SERVICES, CORPORATE_LINKS, GOVERNANCE_LINKS, YOUTUBE_URL } from '@/constants';"
    },
    "teste/components/layout/Header.tsx": {
        6: "import { CALENDLY_URL } from '@/constants';"
    },
    "teste/components/layout/Navigation.tsx": {
        4: "import { NAV_ITEMS } from '@/constants';"
    },
}

def apply_fixes():
    for file_path, line_changes in corrections.items():
        try:
            with open(file_path, 'r') as f:
                lines = f.readlines()
        except FileNotFoundError:
            print(f"File not found: {file_path}", file=sys.stderr)
            continue
        except Exception as e:
            print(f"Error reading {file_path}: {e}", file=sys.stderr)
            continue

        for line_num, new_content in line_changes.items():
            if 0 < line_num <= len(lines):
                lines[line_num - 1] = new_content + '\n'
            else:
                print(f"Invalid line number {line_num} for file {file_path}", file=sys.stderr)


        try:
            with open(file_path, 'w') as f:
                f.writelines(lines)
            print(f"Fixed imports in {file_path}")
        except Exception as e:
            print(f"Error writing to {file_path}: {e}", file=sys.stderr)


if __name__ == "__main__":
    apply_fixes()
