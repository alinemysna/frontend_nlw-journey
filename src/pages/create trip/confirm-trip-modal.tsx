import { User, X } from 'lucide-react'
import { FormEvent } from 'react'

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTripe: (event: FormEvent<HTMLFormElement>) => void

}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTripe,
}: ConfirmTripModalProps) {
  return (
    <div className='fixed inset-9 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5' >
        <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
          <button type="button" onClick={closeConfirmTripModal}>
            < X className='size-5 text-zinc-400' />
          </button>
        </div>
        <p className='text-sm text-zinc-400'>
        Para concluir a criação da viagem para <strong className='font-semibold text-zinc-100'>Florianópolis, Brasil</strong> nas datas de <strong className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024</strong> preencha seus dados abaixo:
        </p>
        </div>
        

        <form onClick={createTripe} className='space-y-3'>
          <div  className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          < User className='text-zinc-400 size-5' />
          <input type="email" 
            name='name' 
            placeholder='Seu nome completo'
            className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' 
            />
          </div>

          <div  className="py-2.5  px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          < User className='text-zinc-400 size-5' />
          <input type="email" 
            name='email' 
            placeholder='Seu e-mail pessoal'
            className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' 
            />
          </div>

        <button className='bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 '>
        Confirmar criação da viagem
            
            </button>
        </form>
      </div>
    </div>
  )
}