import { useTaskData, useTaskMutation } from "@/hooks/useTaskData"
import { ResponseType, TaskType, uuidv4Schema } from "@/types/types"
import { UseMutationResult, UseQueryResult } from "@tanstack/react-query"
import { z } from "zod"

const getTasks = ():UseQueryResult<TaskType[]> => {
  return useTaskData()
}

const createTask = (): UseMutationResult<TaskType, Error, ResponseType> => {
  return useTaskMutation({ method: "POST" })
}

const updateTask = (): UseMutationResult<TaskType, Error, ResponseType> => {
  return useTaskMutation({ method: "PATCH" })
}

const deleteTask = (): UseMutationResult<TaskType, Error, ResponseType> => {
  return useTaskMutation({ method: "DELETE" })
}

const taskQuery = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
}
export default taskQuery;