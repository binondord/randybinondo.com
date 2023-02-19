import Image from 'next/image'

import Wrapper from '@/components/Wrapper';

import android from '../../public/icons/icons8-android-30.png'
import css3 from '../../public/icons/icons8-css3.svg'
import docker from '../../public/icons/icons8-docker.svg'
import java from '../../public/icons/icons8-java.svg'
import javascript from '../../public/icons/icons8-javascript-logo.svg'
import kotlin from '../../public/icons/icons8-kotlin.svg'
import nodejs from '../../public/icons/icons8-node-js.svg'
import php from '../../public/icons/icons8-php-logo.svg'
import linux from '../../public/icons/icons8-linux-30.png'
import laravel from '../../public/icons/icons8-laravel-50.png'


const Skills = () => {
    const techs = [
        {name: 'android', image: android},
        {name: 'css3', image: css3},
        {name: 'docker', image: docker},
        {name: 'java', image: java},
        {name: 'javascript', image: javascript},
        {name: 'kotlin', image: kotlin},
        {name: 'nodejs', image: nodejs},
        {name: 'php', image: php},
        {name: 'linux', image: linux},
        {name: 'laravel', image: laravel},
    ];
    return (
<>
<div className="container">
    <Wrapper title="Skills">
        {techs.map(tech => (
            <>
                <Image
                src={tech.image}
                alt={tech.name}
                width={30}
                height={30}
                />
                {tech.name}
            </>
        ))}
        
        <Image
        src={css3}
        alt="CSS3"
        width={30}
        height={30}
        />
                        CSS3
    </Wrapper>
<div className={`flex items-center mb-5`}>
    <p className={`bg-gray-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-gray-200 dark:text-blue-800`}>Skills</p>
</div>
<div className={`gap-8 sm:grid sm:grid-cols-2`}>
    <div>
        <dl>
            <dt className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>
            <Image
                    src={android}
                    alt="Android"
                    width={30}
                    height={30}
                    />
            Staff</dt>
            <dd className={`flex items-center mb-3`}>
                <div className={`w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2`}>
                    <div className={`bg-gray-600 h-2.5 rounded dark:bg-gray-500" style="width: 88%`}></div>
                </div>
                <span className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>8.8</span>
            </dd>
        </dl>
        <dl>
            <dt className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>Comfort</dt>
            <dd className={`flex items-center mb-3`}>
                <div className={`w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2`}>
                    <div className={`bg-gray-600 h-2.5 rounded dark:bg-gray-500" style="width: 89%`}></div>
                </div>
                <span className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>8.9</span>
            </dd>
        </dl>
        <dl>
            <dt className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>Free WiFi</dt>
            <dd className={`flex items-center mb-3`}>
                <div className={`w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2`}>
                    <div className={`bg-gray-600 h-2.5 rounded dark:bg-gray-500" style="width: 88%`}></div>
                </div>
                <span className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>8.8</span>
            </dd>
        </dl>
        <dl>
            <dt className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>Facilities</dt>
            <dd className={`flex items-center`}>
                <div className={`w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2`}>
                    <div className={`bg-gray-600 h-2.5 rounded dark:bg-gray-500" style="width: 54%`}></div>
                </div>
                <span className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>5.4</span>
            </dd>
        </dl>
    </div>
    <div>
        <dl>
            <dt className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>Value for money</dt>
            <dd className={`flex items-center mb-3`}>
                <div className={`w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2`}>
                    <div className={`bg-gray-600 h-2.5 rounded dark:bg-gray-500" style="width: 89%`}></div>
                </div>
                <span className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>8.9</span>
            </dd>
        </dl>
        <dl>
            <dt className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>Cleanliness</dt>
            <dd className={`flex items-center mb-3`}>
                <div className={`w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2`}>
                    <div className={`bg-gray-600 h-2.5 rounded dark:bg-gray-500" style="width: 70%`}></div>
                </div>
                <span className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>7.0</span>
            </dd>
        </dl>
        <dl>
            <dt className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>Location</dt>
            <dd className={`flex items-center`}>
                <div className={`w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2`}>
                    <div className={`bg-gray-600 h-2.5 rounded dark:bg-gray-500" style="width: 89%`}></div>
                </div>
                <span className={`text-sm font-medium text-gray-500 dark:text-gray-400`}>8.9</span>
            </dd>
        </dl>
    </div>
</div>
</div>
</>
    );
}

export default Skills;