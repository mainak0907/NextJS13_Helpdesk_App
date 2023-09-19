import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl'>There was a problem</h2>
        <p> Could not find the Ticket</p>
        <p>Go Back to <Link href="/tickets">All Tickets</Link></p>
    </main>
  )
}