import Image from 'next/image'
import randy from '../../public/images/randybinondo.png'

const Profile = () => {
    return (
        <>
        <div className={`h-24 w-full lg:h-24 bg-gradient-to-r from-blue-200 to-blue-500`}></div>
        <div 
            className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5`}>
                <div className={`relative group w-16 h-16 rounded-full overflow-hidden sm:h-32 sm:w-32`}>
                    <Image
                        src={randy}
                        alt="Randy D. Binondo"
                        width={96}
                        height={96}
                        />
                </div>
                <div className={`relative group overflow-hidden sm:h-32 sm:w-64 pt-6`}>
                    <h1 className={`text-3xl font-semibold text-black truncate px-2`}>
                        Randy D. Binondo
                        <br/>
                        <sub className={`text-sm font-normal`}>
                            coder. father. handyman.
                        </sub>
                    </h1>
                </div>
            </div>
        </>
    )
};

export default Profile;