import Team1 from '../../assets/Rectangle 99.png'
import Team2 from '../../assets/Rectangle 100.png'
import Team3 from '../../assets/Rectangle 101.png'
import Team4 from '../../assets/Rectangle 99 (1).png'
import Team5 from '../../assets/Rectangle 100 (1).png'
import Team6 from '../../assets/Rectangle 101 (1).png'






export default function Events(){







    const team = [
        {
          name: 'Trbe201 - Introduction to tech',
          role: 'Sat, Dec 09 • 9:00 AM',
          imageUrl:
          Team1,
          des:"Delta State University, Main Campus, Abraka, Delta state, NG",
          location: 'Trybe 201',
        },
        {
          name: 'Delta State Tech week',
          role: 'Thu, March 11 - 16, 2024 • 9:00 AM',
          imageUrl:
          Team2,
          des:"Delta State University, Main Campus, Abraka, Delta state, NG",
          location: 'Trybe 201',
        },
        {
          name: 'Trybe Talk',
          role: 'Thu, Nov 30 • 9:00 AM',
          imageUrl:
          Team3,
          des:"Delta State University, Main Campus, Abraka, Delta state, NG",
          location: 'Trybe 201',
        },
        {
          name: 'Tech-in-business',
          role: 'Sat, Dec 09 • 9:00 AM',
          imageUrl:
          Team4,
          des:"Delta State University, Main Campus, Abraka, Delta state, NG",
          location: 'Trybe 201',
        },
        {
          name: 'Word on the Street',
          role: 'Thu, March 11 - 16, 2024 • 9:00 AM',
          imageUrl:
          Team5,
          des:"Delta State University, Main Campus, Abraka, Delta state, NG",
          location: 'Trybe 201',
        },
        {
          name: 'Trybe Talk',
          role: 'Thu, Nov 30 • 9:00 AM',
          imageUrl:
          Team6,
          des:"Delta State University, Main Campus, Abraka, Delta state, NG",
          location: 'Trybe 201',
        },
     
        // More people...
      ]

    return(
        <div className="mx-auto mb-32 max-w-7xl px-6 sm:mt-30 lg:px-8">
        
        <ul
          role="list"
          className="mx-auto -mt-20 grid max-w-2xl rounded-lg grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3"
        >
          {team.map((person) => (
            <li key={person.name} className='shadow rounded-lg'>
                <img
                className="aspect-[14/13] w-full rounded-tl-lg rounded-tr-lg object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight px-5 text-black">{person.name}</h3>
              <p className="text-base leading-7 px-5 text-red-500">{person.role}</p>
              <p className="text-base leading-7 px-5 text-gray-900">{person.des}</p>
              <p className="text-sm mb-5 px-5 leading-6 text-gray-600  rounded-full">{person.location}</p>
            </li>
          ))}
        </ul>
      </div>
    )
}