export interface User {
  uid: string;
  name: string;
  description: string;
  email: string;
  photoUrl?: string;
  role: string; // 'admin', 'speaker'
}
