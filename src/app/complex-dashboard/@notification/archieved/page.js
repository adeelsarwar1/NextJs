import Card from '@/Components/card'
import Link from 'next/link'
export default function ArchievedNotifications() {
  return (
    <Card> 
    <div className='flex flex-col justify-center content-center text-center'>
    <div> Archieved Notifications</div>
    <div className=' mt-4 border border-red-600 rounded-md hover:bg-red-500 hover:text-white hover:text-lg'>
    <Link href="/complex-dashboard">Default</Link>
    </div>
    </div>
    </Card>
  )
}
