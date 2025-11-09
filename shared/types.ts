export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
// Minimal real-world chat example types (shared by frontend and worker)
export interface User {
  id: string;
  name: string;
}
export interface Chat {
  id: string;
  title: string;
}
export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  text: string;
  ts: number; // epoch millis
}
// AcademiaPlus Form Submissions
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  createdAt: string;
}
export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  documentType: string;
  academicLevel: string;
  subjectArea: string;
  wordCount: number;
  deadline: string;
  requirements: string;
  service: string;
  createdAt: string;
}