import { useForm, SubmitHandler } from "react-hook-form"
import { TaskStatus } from "@/types"
import { z } from "zod"
import useFormStore from "@/stores"

type Inputs = {
  title: string
  description: string
  status: z.infer<typeof TaskStatus>
}

export default function TaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  const task = useFormStore((state) => state.currentTask)
  const updateTask = useFormStore((state) => state.updateCurrentTask)
  const mapStatus = (value: z.infer<typeof TaskStatus>) => {
    const map = {
      "": "",
      "pending": "En cours",
      "done": "Terminé"
    }
    return map[value]
  }

  return (<div className="w-full justify-center items-center pt-4 flex flex-col">
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-130 bg-red">
      <label htmlFor="title" className="w-full mb-1 font-medium text-black">Titre</label>
      <input defaultValue={task?.title ?? ""} id="title" className="py-3 px-4 w-full border-solid border-2 border-[#DDDDDD] bg-white rounded-xl" {...register("title", { required: true, minLength: 10, maxLength: 300 })} />
      {errors.description && <span className="text-[#FF0000] text-sm">Ce champ est obligatoire et doit être entre 10 et 300 charactères</span>}

      <label htmlFor="description" className="mb-1 mt-6 font-medium text-black">Description</label>
      <textarea defaultValue={task?.description ?? ""} id="description" className="py-3 px-4 max-w-130 w-full border-solid border-2 border-[#DDDDDD] bg-white rounded-xl" rows={6} {...register("description", { required: true, minLength: 100, maxLength: 1000 })} />
      {errors.description && <span className="text-[#FF0000] text-sm">Ce champ est obligatoire et doit être entre 100 et 1000 charactères</span>}

      <label htmlFor="status" className="mb-1 mt-6 font-medium text-gray-700">
        Statut
      </label>

      <select
        id="status"
        className="py-3 px-4 max-w-130 w-full border-solid border-2 border-[#DDDDDD] bg-white rounded-xl"
        {...register("status", { required: true })}
        defaultValue={mapStatus(task?.status ?? "")}
      >
        <option value="">-- Sélectionner --</option>
        <option value="En cours">En cours</option>
        <option value="Terminé">Terminé</option>
      </select>

      {errors.status && (
        <span className="text-[#FF0000] text-sm">Ce champ est requis</span>
      )}

    </form>
  </div>
  )
}