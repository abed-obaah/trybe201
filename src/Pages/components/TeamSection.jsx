import Team1 from '../../assets/Rectangle 70.png'
import Team2 from '../../assets/Rectangle 72.png'
import Team3 from '../../assets/Rectangle 74.png'
import Team4 from '../../assets/Rectangle 76.png'
import Team5 from '../../assets/Rectangle 82.png'
import Team6 from '../../assets/Rectangle 83.png'
import Team7 from '../../assets/Rectangle 84.png'
import Team8 from '../../assets/Rectangle 85.png'
import Team9 from '../../assets/SAVE_20231221_201539.jpg'
import { FaArrowRightLong } from "react-icons/fa6";




export default function Team(){







    const team = [
        {
          name: 'Victor Ijomah',
          role: 'SEO Expert & digital marketer',
          imageUrl:
          Team1,
          location: 'View Profile',
        },
        {
          name: 'Izu Confidence',
          role: 'Creative Photographer',
          imageUrl:
          Team2,
          location: 'View Profile',
        },
        {
          name: 'Hampo john paul',
          role: 'Data scientist & Python Programmer',
          imageUrl:
          Team2,
          location: 'View Profile',
        },
        {
          name: 'Favy Ijomah',
          role: 'Serial Enterpreneur & 3D animator',
          imageUrl:
          Team5,
          location: 'View Profile',
        },
        {
          name: 'Amaeze Gladden',
          role: 'Graphics Designer',
          imageUrl:
          Team6,
          location: 'View Profile',
        },
        {
          name: 'Precious Evans',
          role: 'Product Designer',
          imageUrl:
          Team7,
          location: 'View Profile',
        },
        {
          name: 'Obaah Abednego',
          role: 'Mobile App & Web Developer',
          imageUrl:
          Team8,
          location: 'View Profile',
        },
        {
          name: 'Precious Ifeanyichukwu',
          role: 'Software Engineer',
          imageUrl:
          Team9,
          location: 'View Profile',
        },
       
      ]

    return(
        <div className="mx-auto mb-32 mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mt-10">
          <h2 className="text-3xl  font-bold tracking-tight text-black sm:text-4xl">Our Mentors</h2>
        </div>
        <ul
          role="list"
          className="mx-auto  mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {team.map((person) => (
            <li key={person.name} className='ring-1 rounded-lg'>
              <img className="aspect-[14/13] w-full  object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight px-5 text-black">{person.name}</h3>
              <p className="text-base leading-7 px-5 text-gray-400">{person.role}</p>
              <button className="flex text-sm  items-center ml-4 mb-5 px-2 leading-6 text-white bg-custom-blue rounded-full">
                {person.location} <FaArrowRightLong className='ml-1' />
              </button>

            </li>
          ))}
        </ul>
      </div>
    )
}