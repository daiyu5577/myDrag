import { useStore, useSelector, useDispatch } from 'umi';
import { ToolbarModelState } from "@/models/toolbar"
import { GlobalModelState } from "@/models/global"

export interface Models {
  toolbar: ToolbarModelState;
  global: GlobalModelState;
}

// 获取redux model
export function useGetModel<T extends keyof Models>(model: T): Models[T] {
  return useSelector((state: Models) => (state[model]))
}