// hooks/useRepoData.ts
import { Task, uuidv4Schema, RequestType, TaskType, ResponseType } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const baseUrl = 'http://localhost:8080/'

export const useTaskData = () => {
  return useQuery({
    queryKey: ["get"],
    queryFn: () =>
      fetch(`${baseUrl}tasks/`).then((res) =>
        res.json(),
      )
  });
};

export const useTaskMutation = ({ method }: { method: z.infer<typeof RequestType> }) => {
  return useMutation({
    mutationFn: ({ id, task }: ResponseType) =>
      fetch(`${baseUrl}tasks/${id ?? ''}`, {
        method: method,
        headers: (method == "POST" || method == "PATCH") ? {
          'Content-Type': 'application/json'
        } : {},
        body: (method == "POST" || method == "PATCH") ? JSON.stringify(task) :
          JSON.stringify({})
      }).then((res) =>
        res.json(),
      ),
    onSuccess: () => {
      console.log("success")
    },
  })
};