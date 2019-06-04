export interface UserData {
  user_name: string;
  first_name: string;
  last_name: string;
  user_avatar: string;
  stats: UserStats;
}

interface UserStats {
  total_badges: number;
  total_friends: number;
  total_checkins: number;
  total_beers: number;
  total_created_beers: number;
  total_followings: number;
  total_photos: number;
};

export interface Stat {
  name: string | number;
  count: number;
}
