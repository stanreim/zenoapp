import { useState, useRef, useEffect } from 'react';
import { X, Plus } from 'lucide-react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

function PlusIcon({ themeMode }: { themeMode?: 'light' | 'dark' | 'color' }) {
  return (
    <div className="relative rounded-[4px] shrink-0 size-3 sm:size-4 lg:size-[16px]" data-name="Plus">
      <div className="overflow-clip relative rounded-[inherit] size-full flex items-center justify-center">
        <Plus size={10} className={`transition-colors duration-500 ${themeMode === 'light' ? 'text-[#bdbdbd]' : 'text-[#666]'}`} strokeWidth={2} />
      </div>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] transition-colors duration-500 ${themeMode === 'light' ? 'border-[#ccc]' : 'border-[#444]'}`} />
    </div>
  );
}

export function TodoList({ themeMode }: { themeMode?: 'light' | 'dark' | 'color' }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Finish Landler Cadastre', completed: false },
    { id: '2', text: 'Add prototype', completed: false },
    { id: '3', text: 'Play around with Cursor', completed: false },
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [newTodoText, setNewTodoText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  
  const inputRef = useRef<HTMLInputElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAdding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAdding]);

  useEffect(() => {
    if (editingId && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingId]);

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: newTodoText.trim(), completed: false }]);
      setNewTodoText('');
      setIsAdding(false);
    } else {
      setIsAdding(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    } else if (e.key === 'Escape') {
      setIsAdding(false);
      setNewTodoText('');
    }
  };

  const handleEditSave = () => {
    if (editingId) {
      if (editText.trim()) {
        setTodos(todos.map(t => t.id === editingId ? { ...t, text: editText.trim() } : t));
      } else {
        setTodos(todos.filter(t => t.id !== editingId));
      }
      setEditingId(null);
      setEditText('');
    }
  };

  const handleEditKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEditSave();
    } else if (e.key === 'Escape') {
      setEditingId(null);
      setEditText('');
    }
  };

  const toggleComplete = (id: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const startEditing = (todo: Todo) => {
    // Optional: Prevent editing if completed, but user request implies full inline edit capability.
    // I'll allow it.
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-center relative shrink-0 w-full" data-name="List">
      {todos.map(todo => (
        <div 
          key={todo.id} 
          className="content-stretch flex gap-2 items-center relative shrink-0 group w-full min-h-[24px]" 
          data-name="Task"
        >
          {/* Checkbox */}
          <div 
            onClick={() => toggleComplete(todo.id)}
            className={`relative rounded-[4px] shrink-0 size-3 sm:size-4 lg:size-[16px] cursor-pointer hover:opacity-80 transition-all duration-500`}
            data-name="Checkmark" 
            style={{ 
              backgroundImage: themeMode === 'light'
                ? "linear-gradient(158.875deg, rgb(239, 239, 239) 13.934%, rgb(255, 255, 255) 127.92%)"
                : "linear-gradient(158.875deg, rgb(60, 60, 60) 13.934%, rgb(50, 50, 50) 127.92%)"
            }}
          >
            <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] transition-colors duration-500 ${themeMode === 'light' ? 'border-[#ccc]' : 'border-[#444]'}`} />
            {todo.completed && (
              <div className="absolute inset-0 flex items-center justify-center">
                 <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="w-[70%] h-[70%]">
                    <path 
                      d="M1 4L3.5 6.5L9 1" 
                      stroke={themeMode === 'light' ? "#666" : "#999"} 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="transition-all duration-500"
                    />
                 </svg>
              </div>
            )}
          </div>

          {/* Text or Input */}
          <div className="flex-1 min-w-0 relative flex items-center">
            {editingId === todo.id ? (
               <input
                 ref={editInputRef}
                 type="text"
                 value={editText}
                 onChange={(e) => setEditText(e.target.value)}
                 onBlur={handleEditSave}
                 onKeyDown={handleEditKeyDown}
                 className={`font-['SF_Pro:Medium',sans-serif] font-[510] text-xs sm:text-sm lg:text-[14px] bg-transparent border-none outline-none w-full p-0 m-0 h-auto leading-[normal] transition-colors duration-500 ${themeMode === 'light' ? 'text-black' : 'text-white'}`}
                 style={{ fontVariationSettings: "'wdth' 100" }}
               />
            ) : (
              <p 
                onClick={() => startEditing(todo)}
                className={`font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-xs sm:text-sm lg:text-[14px] text-left cursor-text w-full truncate transition-colors duration-500 ${
                  todo.completed 
                    ? (themeMode === 'light' ? 'text-[#bdbdbd] line-through' : 'text-[#666] line-through')
                    : (themeMode === 'light' ? 'text-black' : 'text-white')
                }`} 
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                {todo.text}
              </p>
            )}
          </div>

          {/* Delete Icon - Visible on Hover */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo(todo.id);
            }}
            className={`opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded cursor-pointer shrink-0 ${themeMode === 'light' ? 'hover:bg-black/5' : 'hover:bg-white/5'}`}
            title="Delete task"
          >
            <X size={14} className={`transition-colors duration-500 ${themeMode === 'light' ? 'text-[#999]' : 'text-[#666]'}`} />
          </button>
        </div>
      ))}

      {/* Add To-Do Row */}
      <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full min-h-[24px]" data-name="Task">
        <PlusIcon themeMode={themeMode} />
        <div className="flex-1 relative">
           {isAdding ? (
             <input
               ref={inputRef}
               type="text"
               value={newTodoText}
               onChange={(e) => setNewTodoText(e.target.value)}
               onBlur={handleAddTodo}
               onKeyDown={handleKeyDown}
               placeholder="Enter task..."
               className={`font-['SF_Pro:Medium',sans-serif] font-[510] text-xs sm:text-sm lg:text-[14px] bg-transparent border-none outline-none w-full p-0 m-0 leading-[normal] transition-colors duration-500 ${themeMode === 'light' ? 'text-black placeholder:text-[#bdbdbd]' : 'text-white placeholder:text-[#666]'}`}
               style={{ fontVariationSettings: "'wdth' 100" }}
             />
           ) : (
             <p 
               onClick={() => setIsAdding(true)}
               className={`font-['SF_Pro:Medium',sans-serif] font-[510] leading-[normal] relative shrink-0 text-xs sm:text-sm lg:text-[14px] text-left cursor-pointer transition-colors duration-500 w-full ${themeMode === 'light' ? 'text-[#bdbdbd] hover:text-[#999]' : 'text-[#666] hover:text-[#888]'}`} 
               style={{ fontVariationSettings: "'wdth' 100" }}
             >
               Add to-do
             </p>
           )}
        </div>
      </div>
    </div>
  );
}
