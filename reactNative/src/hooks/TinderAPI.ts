import {useQuery} from '@tanstack/react-query';
import {REACT_APP_API_SERVER} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserInfo {
  username: string;
  profile_pic: string;
}
interface TinderProfile {
  id: number;
  is_pt: boolean;
  gender: string;
  username: string;
  profile_pic: string;
  gym_center: string;
  gym_location: string;
  interest_name: string[];
  bio: string;
}

export function useGetUsername(token: string) {
  const {isLoading, error, data, isFetching} = useQuery({
    queryKey: ['getUsername', token],
    queryFn: async () => {
      const res = await fetch(
        `${REACT_APP_API_SERVER}/discover/get-user-info`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const result = await res.json();
      return result as UserInfo;
    },
  });

  if (isLoading || isFetching || error || !data) {
    return [];
  }

  return data;
}

export function useGetTinderProfile(token: string, preference: string) {
  let real_token = AsyncStorage.getItem('token');
  const {isLoading, error, data, isFetching} = useQuery({
    queryKey: ['tinderProfile', token, preference],
    queryFn: async () => {
      const res = await fetch(
        `${REACT_APP_API_SERVER}/discover/get-all-profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const result = await res.json();
      console.log('API check token', result);
      return result as TinderProfile[];
    },
  });

  if (isLoading || isFetching || error || !data) {
    return [];
  }

  return data;
}

export function useGetUserProfile(token: string, preference: string) {
  const {isLoading, error, data, isFetching} = useQuery({
    queryKey: ['userProfile', token, preference],
    queryFn: async () => {
      const res = await fetch(
        `${REACT_APP_API_SERVER}/discover/get-all-users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const result = await res.json();
      return result as TinderProfile[];
    },
  });

  if (isLoading || isFetching || error || !data) {
    return [];
  }

  return data;
}

export function useGetPTProfile(token: string, preference: string) {
  const {isLoading, error, data, isFetching} = useQuery({
    queryKey: ['PTProfile', token, preference],
    queryFn: async () => {
      const res = await fetch(`${REACT_APP_API_SERVER}/discover/get-all-pt`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      return result as TinderProfile[];
    },
  });

  if (isLoading || isFetching || error || !data) {
    return [];
  }

  return data;
}

export function useLikeUser(token: string, userId: number) {
  const {isLoading, error, data, isFetching} = useQuery({
    queryKey: ['likeUser', token, userId],
    queryFn: async () => {
      const res = await fetch(
        `${REACT_APP_API_SERVER}/discover/like-users/${userId}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const result = await res.json();
      return result;
    },
  });

  if (isLoading || isFetching || error || !data) {
    return [];
  }

  return data;
}
