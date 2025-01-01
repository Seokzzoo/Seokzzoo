<!-- <template>
  <div>
    <p>getters: {{ store.doubleCount }}</p>
    <button @click="store.increment()">+</button>
  </div>
</template>

<script setup>
// 1. 중앙 저장소 가져오기
import { useCounterStore } from "./stores/counter"

// 2. 중앙 저장소를 활용해 인스턴스 생성
const store = useCounterStore()

// 3. 중앙 저장소의 상태를 참조
console.log(store.count)

// 액션 호출
// store.increment()
</script>

<style scoped></style> -->

<template>
  <div>
    <h1>Todo Project</h1>
    <h2>완료된 Todo 개수 : {{ store.doneTodosCount }}</h2>
    <TodoList />
    <TodoForm />
  </div>
</template>

<script setup>
import TodoForm from "./components/TodoForm.vue"
import TodoList from "./components/TodoList.vue"
import { useCounterStore } from "./stores/counter"

const store = useCounterStore()
</script>

<style scoped></style>
