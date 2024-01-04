import People from '../../assets/ourPeople.png'


export default function content(){
    return(
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our people</h2> */}
                <p className="mt-6 text-3xl font-boldleading-8 sm:text-4xl text-gray-900">
                Expert Mentors at your fingertips
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                Whether you are seeking career advice, skill development, or personal growth. Trybe201 brings you access to world-class mentors who can guide you effectively
                </p>
                <button className="mt-6 bg-custom-blue rounded-md p-5 text-white"
                 style={{
                  width: 'fit-content',
                  height: 'fit-content',
                  top: '4268px',
                  left: '538px',
                  padding: '10px',
                  borderRadius: '5px',
                  gap: '10px',
              }}>
                  Subscribe to our Mentorship
                </button>
                
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                  src={People}
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
    )
}