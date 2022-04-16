import { ChangeEvent, FC, useCallback, useState } from "react"
import styled from "styled-components"
import { useMemoList } from "../hooks/useMemoList"
import { MemoList } from "./MemoList"

export const App: FC = () => {
  const { memos, addTodo, deleteTodo } = useMemoList()
  const [text, setText] = useState<string>("")

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    return setText(event.target.value)
  }

  const onClieckAdd = () => {
    addTodo(text)
    setText("")
  }

  // 関数をPropsで渡す際の再レンダリングを防ぐためuseCallback()でmemo化
  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index)
  },[deleteTodo])

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClieckAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete}></MemoList>
    </div>
  )
}

const SButton = styled.button`
  margin-left: 16px;
`
