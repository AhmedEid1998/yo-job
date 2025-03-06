// Data
const employmentTypes = [
    { name: 'Full Time Jobs', rate: 159, checked: false },
    { name: 'Part Time Jobs', rate: 38, checked: true },
    { name: 'Remote Jobs', rate: 50, checked: true },
    { name: 'Training Jobs', rate: 15, checked: false }
];
const seniorityLevels = [
    { name: 'Student Level', rate: 48, checked: true },
    { name: 'Entry Level', rate: 51, checked: true },
    { name: 'Mid Level', rate: 150, checked: false },
    { name: 'Senior Level', rate: 30, checked: false },
    { name: 'Directors', rate: 20, checked: false },
    { name: 'VP or Above', rate: 15, checked: false },
];
const jobs = [
    {
        title: 'UX UI Designer',
        description: "In this position, you will work closely with cross-functional peers, including Product Managers, Data Analysts, and Engineers to make offers, bundles, and messaging efficient and seamless.",
        company: {
            name: 'MAGIC UNICORN',
            logo: './images/jobs-global-logo.jpg',
            location: 'ESTONIA, TALLIN',
        },
        level: 'Student-Entry',
        type: 'Remote Job',
        salary: '$10520 PA',
        tags: ['Design', 'UX', 'UI'],
        publishDate: '24 March 2024',
    },
    {
        title: 'UI Artist',
        description: "With design ingrained at all levels of our organization, including senior leadership, your impact will be valued and recognized. Join a well-established design organization.",
        company: {
            name: 'BUSINESS CORPORATE GROUP',
            logo: './images/jobs-global-logo.jpg',
            location: 'DENMARK, COPENHAGEN',
        },
        level: 'Mid-Senior',
        type: 'Remote Job',
        salary: '$62100 PA',
        tags: ['Design', 'Senior', 'Remote'],
        publishDate: '24 March 2024',
    },
    {
        title: 'Senior Product Designer',
        description: "We've adopted a hybrid workplace model where 2 days in office are recommended but not enforced. It's up to you and your team to decide on the exact days you’ll spend working together.",
        company: {
            name: 'QUY',
            logo: './images/jobs-global-logo.jpg',
            location: 'CZECH REPUBLIC, PRAGUE',
        },
        level: 'Senior',
        type: 'Full-Time',
        salary: '$100000 PA',
        tags: ['Design', 'Product', 'Remote'],
        publishDate: '23 March 2024',
    },
    {
        title: 'Senior Product Designer',
        description: "Since our inception in 2014, founded by a team of scientists from CERN, we have dedicated ourselves to providing free and open-source technology to millions worldwide and freedom online.",
        company: {
            name: 'SINTRA GROUP',
            logo: './images/jobs-global-logo.jpg',
            location: 'ALBANIA, TIRANA',
        },
        level: 'Mid-Senior',
        type: 'Full-Time',
        salary: '$60520 PA',
        tags: ['Design', 'Senior', 'AI'],
        publishDate: '28 March 2024',
    },
    {
        title: 'UI Designer',
        description: "We're a growing, ambitious HealthTech business building the essential digital health partner of tomorrow to empower women, girls with the knowledge and support they need to live better.",
        company: {
            name: 'MOON ACTIVE',
            logo: './images/jobs-global-logo.jpg',
            location: 'ARGENTINA, BUENOS AIRES',
        },
        level: 'Senior',
        type: 'Full-Time',
        salary: '$84800 PA',
        tags: ['Design', 'Senior', 'Full-Time'],
        publishDate: '28 March 2024',
    },
    {
        title: 'Lead Product Designer',
        description: "In July, we secured a $200M investment led by General Atlantic to help revolutionize women's health, and became the first purely digital consumer women's health app to achieve unicorn status!",
        company: {
            name: 'QUY',
            logo: './images/jobs-global-logo.jpg',
            location: 'BELGIUM, BRUSSELS',
        },
        level: 'Lead',
        type: 'Full-Time',
        salary: '$101100 PA',
        tags: ['Design', 'Lead', 'Full-Time'],
        publishDate: '26 March 2024',
    },
    {
        title: 'Senior Product Designer',
        description: "In this position, you will work closely with cross-functional peers, including Product Managers, Data Analysts, and Engineers to make offers, bundles, and messaging efficient and seamless.",
        company: {
            name: 'COWI',
            logo: './images/jobs-global-logo.jpg',
            location: 'FINLAND, HELSINKI',
        },
        level: 'Senior',
        type: 'Full-Time',
        salary: '$100500 PA',
        tags: ['Design', 'Senior', 'Full-Time'],
        publishDate: '22 March 2024',
    },
    {
        title: 'Senior Game Designer',
        description: "We've adopted a hybrid workplace model where 2 days in office are recommended but not enforced. It's up to you and your team to decide on the exact days you'll spend working together.",
        company: {
            name: 'LITIT GROUP',
            logo: './images/jobs-global-logo.jpg',
            location: 'ITALIA, ROME',
        },
        level: 'Senior',
        type: 'Full-Time',
        salary: '$100800 PA',
        tags: ['Design', 'Game', 'Full-Time'],
        publishDate: '22 March 2024',
    },
    {
        title: 'Senior Concept Artist',
        description: "With design ingrained at all levels of our organization, including senior leadership, your impact will be valued and recognized. Join a well-established design organization.",
        company: {
            name: 'BEHANCE',
            logo: './images/jobs-global-logo.jpg',
            location: 'GERMANY, BERLIN',
        },
        level: 'Senior',
        type: 'Remote Job',
        salary: '$102100 PA',
        tags: ['Design', 'Senior', 'Remote'],
        publishDate: '22 March 2024',
    }
];

// DOM Elements
const navMenuBtn = document.getElementById("menu-btn");
const navMenuDropdown = document.getElementById("menu");
const chipsContainer = document.getElementById('chips-container');
const typeDropdown = document.getElementById('type-dropdown');
const seniorityDropdown = document.getElementById('seniority-dropdown');
const jobListings = document.getElementById('job-listings');

navMenuBtn.addEventListener("click", function () {
    navMenuDropdown.classList.toggle("hidden");
});

chipsContainer.innerHTML = `
    <div class="chip ms-1 flex items-center gap-1 bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-sm">
        <span class="w-max">Product Designer</span>
        <button class="ms-1 text-gray-800 hover:text-gray-900">×</button>
    </div>
    <div class="chip ms-1 flex items-center gap-1 bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-sm">
        <span class="w-max">Game Designer</span>
        <button class="ms-1 text-gray-800 hover:text-gray-900">×</button>
    </div>
    <div class="chip ms-1 flex items-center gap-1 bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-sm">
        <span class="w-max">Artist</span>
        <button class="ms-1 text-gray-800 hover:text-gray-900">×</button>
    </div>
    <div class="chip ms-1 flex items-center gap-1 bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-sm">
        <span class="w-max">Designer</span>
        <button class="ms-1 text-gray-800 hover:text-gray-900">×</button>
    </div>
`;

// Render Employment Types
typeDropdown.innerHTML = employmentTypes.map(type => `
    <label class="flex items-center justify-between cursor-pointer">
        <div class="flex items-center space-x-4">
            <input type="checkbox" ${type.checked ? 'checked' : ''} class="w-4 h-4 accent-black cursor-pointer" />
            <span class="text-gray-700 text-sm">${type.name}</span>
        </div>
        <span class="${type.checked ? 'text-green-600 bg-green-100 ' : 'text-gray-500 bg-gray-200 ' }text-gray-500 bg-gray-200 text-xs px-2 py-1 rounded-full">${type.rate}</span>
    </label>
`).join('');

// Render Seniority Levels
seniorityDropdown.innerHTML = seniorityLevels.map(level => `
    <label class="flex items-center justify-between cursor-pointer">
        <div class="flex items-center space-x-4">
            <input type="checkbox" ${level.checked ? 'checked' : ''} class="w-4 h-4 accent-black cursor-pointer" />
            <span class="text-gray-700 text-sm">${level.name}</span>
        </div>
        <span class="${level.checked ? 'text-green-600 bg-green-100 ' : 'text-gray-500 bg-gray-200 ' }text-gray-500 bg-gray-200 text-xs px-2 py-1 rounded-full">${level.rate}</span>
    </label>
`).join('');

// Render Job Listings
jobListings.innerHTML = jobs.map(job => `
    <div class="bg-white border border-gray-300 rounded-lg shadow-md p-4 space-y-3">
        <!-- Header: Icon, Job Title & Menu -->
        <div class="flex justify-between items-start">
            <div class="flex space-x-3">
                <img src="${job.company.logo}" alt="Company Logo" class="w-10 h-10 rounded-lg" />
                <div>
                    <h3 class="font-semibold text-lg">${ job.title}</h3>
                    <p class="text-gray-500 text-sm">${ job.company.name}</p>
                </div>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 font-bold cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 12h.01M12 12h.01M18 12h.01" />
            </svg>

            
        </div>

        <!-- Location -->
        <div class="flex items-center text-gray-700 text-sm space-x-1 font-bold">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21.75s7.5-6.75 7.5-11.25A7.5 7.5 0 0 0 4.5 10.5C4.5 15 12 21.75 12 21.75z" />
                <circle cx="12" cy="10.5" r="2.5" />
            </svg>
            <span class="job-location">${job.company.location}</span>
        </div>

        <!-- Job Details -->
        <div class="flex justify-between text-sm font-medium font-bold py-2">
            <span class="text-black font-bold">${job.level}</span>
            <span class="text-black font-bold">${job.type}</span>
            <span class="text-black font-bold">${job.salary}</span>
        </div>

        <!-- Job Description -->
        <p class="text-gray-600 text-sm">
            <span>${job.description}</span>
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 py-3">
            ${job.tags.map(tag => `<span class="px-3 py-1 bg-gray-200 text-sm rounded-lg">${tag}</span>`).join('')}
        </div>

        <!-- Footer: Date & Close Button -->
        <div class="flex justify-between items-center text-gray-500 text-sm">
            <span>${job.publishDate}</span>
            <div class="flex justify-between items-center">
                <button class="mx-4 font-bold text-black">
                    &#x2715;
                </button>
                <button class="text-gray-500 hover:text-gray-500 transition duration-200">
                    <svg class="w-5 h-5 stroke-current hover:fill-gray-500" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </button>                                                        
            </div>
        </div>
    </div>
`).join('');