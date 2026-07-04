import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Gerenciador de Tarefas</h1>
        <p className="text-gray-600 mb-8">
          Aplicação para gerenciamento de tarefas com suporte à importação em massa via arquivos .txt
        </p>
        <Link
          href="/task"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium"
        >
          Acessar o Gerenciador
        </Link>
      </div>
    </div>
  )
}