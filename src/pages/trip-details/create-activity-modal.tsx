import { X, Tag, Calendar, Clock } from 'lucide-react'
import { Button } from '../../components/button'


interface CreateActivityModalProps {
  closeCreatActivityModal: () => void
}

export function CreateActivityModal({ closeCreatActivityModal }: CreateActivityModalProps) {
  return (
    <div className='fixed inset-9 bg-black/60 flex items-center justify-center'>
    <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5' >
      <div className='space-y-2'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
        
        <Button onClick={closeCreatActivityModal} variant='secondary' size='default'>
        < X />
        </Button>
      </div>
      <p className='text-sm text-zinc-400'>
      Todos convidados podem visualizar as atividades.
      </p>
      </div>
      

      <form className='space-y-3'>
        <div  className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
        < Tag className='text-zinc-400 size-5' />
        <input 
          name='title' 
          placeholder='Qual a atividade?'
          className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' 
          />
        </div>

        <div className='flex items-center gap-2'>
        <div  className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
        < Calendar className='text-zinc-400 size-5' />
        <input
          type='datetime-local'
          name='occurs_at' 
          placeholder='20 de agosto'
          className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' 
          />
        </div>
        <div  className="h-14 px-4 w-36 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
        < Clock className='text-zinc-400 size-5' />
        <input
          type='email' 
          name='email' 
          placeholder='Horário'
          className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' 
          />
        </div>        
        </div>

          <Button variant="primary" size='full'>
          Salvar atividade
          </Button>
      </form>
    </div>
  </div>
  )
}