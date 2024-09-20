// import Card from '@/Components/card'
// import Link from 'next/link'
// export default function Notifications() {
//   return (
//     <Card> <div>Notifications</div>
//     <Link href="/complex-dashboard/archieved">Archieve</Link>
//     </Card>
//   )
// }
import Card from '@/Components/card'
import Link from 'next/link'
export default function Notifications() {
  return (
    <Card> 
    <div className='flex flex-col justify-center content-center text-center'>
    <div>  Notifications</div>
    <div className=' mt-4 border border-red-600 rounded-md hover:bg-red-500 hover:text-white hover:text-lg'>
    <Link href="/complex-dashboard/archieved">Archieve</Link>
    </div>
    </div>
    </Card>
  )
}
