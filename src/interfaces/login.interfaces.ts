// types.ts
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  scope: string;
  created_at: number;
  role: string;
  community_slug: string;
  is_active: boolean;
  is_account_setup_finished: boolean;
  step: string | null;
  user_id: number;
}
