"use client"

import React from 'react'

export default function Input() {
  return (
    <input
      type="text"
      placeholder="Filtrar tarefas..."
      className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
      aria-label="Pesquisar tarefas" />
  )
}