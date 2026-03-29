import { BaseMessage } from "@langchain/core/messages";
import { Annotation } from "@langchain/langgraph";

// Definisi Interface untuk Type Safety
export type IMessageState = {
  messages: BaseMessage[];
  userMessage: string;
  response: null | string
}

export const MainState = Annotation.Root({
  // Kita tambahkan reducer 'concat' supaya messages lama dan baru digabung
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y),
    default: () => [],
  }),
  userMessage: Annotation<string>,
  response: Annotation<null | string>,
  page: Annotation<null | string>,
  topic: Annotation<null | string>
});