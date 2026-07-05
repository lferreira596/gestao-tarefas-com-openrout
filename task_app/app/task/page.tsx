'use client'

import { useState, useEffect } from 'react'

export default function TaskApp() {
  const [tasks, setTasks] = useState<string[]>([])
  const [importResult, setImportResult] = useState<string>('')

  // Simulated tasks for demo
  useEffect(() => {
    if (tasks.length === 0) {
      const initialTasks = [
        'Comprar pão',
        'Fechar o contrato',
        'Devocar a mochila'
      ]
      setTasks(initialTasks)
    }
  }, [tasks])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const content = event.target?.result as string
        const newTasks = content
          .split('\n')
          .map(task => task.trim())
          .filter(task => task.length > 0)
        setTasks(prev => [...prev, ...newTasks])
        setImportResult(`Importado ${newTasks.length} tarefas de "${file.name}"`)
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Gerenciador de Tarefas</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Importação de .txt</span>
            <input
              type="file"
              accept=".txt"
              onChange={handleFileUpload}
              className="hidden"
              id="task-upload"
            />
            <label
              htmlFor="task-upload"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center space-x-2"
            >
              <span>Selecionar arquivo</span>
            </label>
          </div>
        </div>

        {/* Import Result */}
        {importResult && (
          <div className="mb-6 p-4 bg-blue-50 text-blue-800 rounded-lg text-blue-900">
            {importResult}
          </div>
        )}

        {/* Task Filter */}
        <div className="flex justify-between mb-6">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Filtrar tarefas..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
          <button
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition disabled:opacity-50"
          >
            Limpar Tarefas
          </button>
        </div>

        {/* Task List */}
        <div className="bg-white rounded-lg shadow md:mt-6">
          <ul className="divide-y divide-gray-200">
            {tasks.map((task, index) => (
              <li key={index} className="p-4 border-b">
                <span className="font-medium text-gray-900">{task}</span>
                <span className="text-xs text-gray-400 ml-2">#T{index + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}