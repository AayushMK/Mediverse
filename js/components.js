// Component generation functions
function createHeader() {
    return `
        <div class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <div class="flex items-center space-x-4">
                        <img 
                            src="${COMPANY_DATA.logo}" 
                            alt="Mediverse Tradelink Logo" 
                            class="h-10 w-auto"
                        />
                        <div class="hidden sm:block">
                            <div class="text-xl font-semibold text-gray-900">
                                Mediverse <span class="text-emerald-600">Tradelink</span>
                            </div>
                            <div class="text-xs text-gray-500 font-medium">${COMPANY_DATA.tagline}</div>
                        </div>
                    </div>

                    <!-- Desktop Navigation -->
                    <nav class="hidden lg:flex items-center space-x-1">
                        ${NAVIGATION_ITEMS.map(item => `
                            <button
                                onclick="scrollToSection('${item.href}')"
                                class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                            >
                                ${item.name}
                            </button>
                        `).join('')}
                        <button
                            onclick="scrollToSection('#contact')"
                            class="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg shadow-sm transition-colors"
                        >
                            Get in Touch
                        </button>
                    </nav>

                    <!-- Mobile menu button -->
                    <div class="lg:hidden">
                        <button
                            onclick="toggleMobileMenu()"
                            class="p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                        >
                            <span id="menu-icon">${createIcon('menu', 'h-6 w-6')}</span>
                            <span id="close-icon" class="hidden">${createIcon('close', 'h-6 w-6')}</span>
                        </button>
                    </div>
                </div>

                <!-- Mobile Navigation -->
                <div id="mobile-menu" class="lg:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-sm hidden">
                    <div class="space-y-2">
                        ${NAVIGATION_ITEMS.map(item => `
                            <button
                                onclick="scrollToSection('${item.href}'); closeMobileMenu()"
                                class="block w-full text-left px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                            >
                                ${item.name}
                            </button>
                        `).join('')}
                        <div class="pt-2">
                            <button
                                onclick="scrollToSection('#contact'); closeMobileMenu()"
                                class="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg text-center"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createHero() {
    return `
        <div class="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
            <!-- Background decoration -->
            <div class="absolute inset-0 bg-grid-slate-100"></div>
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
            
            <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <!-- Content -->
                    <div class="space-y-8">
                        <div class="space-y-4">
                            <div class="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
                                <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                                Pioneering Healthcare Distribution in Nepal
                            </div>
                            
                            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Empowering Healthcare,
                                <span class="block text-emerald-600">Expanding Possibilities</span>
                            </h1>
                            
                            <p class="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                Delivering quality surgical solutions today, expanding to nutraceuticals and 
                                pharmaceuticals for a healthier Nepal tomorrow.
                            </p>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <button 
                                onclick="scrollToSection('#contact')"
                                class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group inline-flex items-center justify-center"
                            >
                                Partner With Us
                                ${createIcon('arrowRight', 'ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform')}
                            </button>
                            
                            <button 
                                onclick="scrollToSection('#about')"
                                class="border-2 border-gray-200 hover:border-emerald-600 text-gray-700 hover:text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 group inline-flex items-center justify-center"
                            >
                                ${createIcon('play', 'mr-2 h-5 w-5')}
                                Learn More
                            </button>
                        </div>

                        <!-- Trust indicators -->
                        <div class="pt-8 border-t border-gray-200">
                            <div class="grid grid-cols-3 gap-8">
                                ${STATS_DATA.map(stat => `
                                    <div class="text-center">
                                        <div class="text-2xl font-bold text-gray-900">${stat.value}</div>
                                        <div class="text-sm text-gray-600">${stat.label}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Image -->
                    <div class="relative">
                        <div class="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Medical surgical equipment and healthcare"
                                class="rounded-2xl shadow-2xl w-full"
                                loading="lazy"
                            />
                        </div>
                        <!-- Decorative elements -->
                        <div class="absolute -top-4 -left-4 w-72 h-72 bg-emerald-100 rounded-2xl -z-10 opacity-50"></div>
                        <div class="absolute -bottom-4 -right-4 w-72 h-72 bg-teal-100 rounded-2xl -z-10 opacity-50"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createAbout() {
    return `
        <div id="about" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center mb-20">
                    <div class="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                        About Our Company
                    </div>
                    <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About MVTL</h2>
                    <p class="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Welcome to Mediverse Tradelink Pvt Ltd (MVTL) – a dynamic force in Nepal's healthcare sector, 
                        specializing in the import and distribution of high-quality and innovative surgical products.
                    </p>
                </div>

                <!-- Main content grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Our Journey</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Founded in 2025 by four enthusiasts, MVTL plans to grow from a small distributor to one of 
                                Nepal's most trusted medical supply partners, serving over 250 healthcare institutions nationwide.
                            </p>
                        </div>
                        
                        <div>
                            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Market Position</h3>
                            <p class="text-gray-600 leading-relaxed mb-4">
                                We are committed to securing 25% market share in Nepal's surgical product sector, backed by 
                                a robust distribution network spanning 50+ districts.
                            </p>
                            
                            <div class="space-y-3">
                                ${ABOUT_HIGHLIGHTS.map(highlight => `
                                    <div class="flex items-start space-x-3">
                                        ${createIcon('checkCircle', 'h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0')}
                                        <span class="text-gray-600">${highlight}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Medical professionals and surgical equipment in Nepal"
                            class="rounded-2xl shadow-xl w-full"
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                </div>

                <!-- Mission/Vision Cards -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    <div class="relative overflow-hidden border rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                        <h3 class="text-2xl font-semibold mb-4">Our Vision</h3>
                        <p class="text-emerald-50 leading-relaxed">
                            "We aim to become Nepal's most trusted healthcare supply chain partner by bridging global 
                            innovations with local needs, delivering high-quality surgical and medical supplies through 
                            ethical distribution, while expanding into nutraceuticals and pharmaceuticals to provide 
                            holistic healthcare solutions and strengthen Nepal's medical infrastructure for a healthier future."
                        </p>
                    </div>
                    
                    <div class="relative overflow-hidden border rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                        <h3 class="text-2xl font-semibold mb-4">Our Mission</h3>
                        <p class="text-slate-200 leading-relaxed">
                            "Our mission is to enhance healthcare outcomes in Nepal by delivering quality-certified 
                            surgical, medical, and future nutraceutical products through resilient supply networks, 
                            ensuring reliable nationwide access to advanced therapeutic solutions while maintaining 
                            the highest standards of excellence and affordability."
                        </p>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 lg:grid-cols-5 gap-6">
                    ${ABOUT_STATS.map((stat, index) => `
                        <div class="text-center border rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-6">
                            ${createIcon(index === 0 ? 'users' : index === 1 ? 'globe' : index === 2 ? 'target' : index === 3 ? 'heart' : 'trendingUp', `h-8 w-8 ${stat.color} mx-auto mb-4`)}
                            <div class="text-3xl font-bold text-gray-900 mb-2">${stat.value}</div>
                            <p class="text-sm text-gray-600 font-medium">${stat.label}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function createLeadership() {
    return `
        <div id="leadership" class="py-24 bg-gray-50">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center mb-20">
                    <div class="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                        Leadership Team
                    </div>
                    <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
                    <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Our experienced leadership team combines decades of business expertise with a shared vision 
                        of transforming healthcare distribution in Nepal through innovation and dedication.
                    </p>
                </div>

                <!-- Leadership Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    ${LEADERS_DATA.map(leader => `
                        <div class="group hover:shadow-2xl transition-all duration-500 border rounded-xl overflow-hidden bg-white">
                            <div class="relative">
                                <!-- Header with gradient -->
                                <div class="bg-gradient-to-r ${leader.gradient} p-6 text-white relative overflow-hidden">
                                    <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                                    <div class="flex items-start space-x-4 relative z-10">
                                        <img
                                            src="${leader.image}"
                                            alt="${leader.name}"
                                            class="w-20 h-20 rounded-xl object-cover border-2 border-white/20 shadow-lg"
                                        />
                                        <div class="flex-1">
                                            <h3 class="text-xl font-semibold mb-1">${leader.name}</h3>
                                            <p class="text-white/90 text-sm font-medium">${leader.position}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Content -->
                                <div class="p-6">
                                    <div class="flex items-start space-x-3 mb-4">
                                        ${createIcon('quote', 'h-5 w-5 text-gray-400 mt-1 flex-shrink-0')}
                                        <p class="text-gray-600 text-sm leading-relaxed italic">${leader.bio}</p>
                                    </div>
                                    
                                    <div class="border-t border-gray-100 pt-4">
                                        <p class="text-emerald-600 font-medium text-sm mb-4">${leader.tagline}</p>
                                        
                                        <div class="flex items-center justify-between">
                                            <div class="flex space-x-3">
                                                <button class="p-2 rounded-lg bg-gray-100 hover:bg-emerald-100 hover:text-emerald-600 text-gray-600 transition-colors">
                                                    ${createIcon('linkedin', 'h-4 w-4')}
                                                </button>
                                                <button class="p-2 rounded-lg bg-gray-100 hover:bg-emerald-100 hover:text-emerald-600 text-gray-600 transition-colors">
                                                    ${createIcon('mail', 'h-4 w-4')}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function createProducts() {
    return `
        <div id="products" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center mb-16">
                    <div class="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                        Product Ecosystem
                    </div>
                    <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Product Ecosystem</h2>
                    <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Delivering quality surgical solutions today while planning innovative healthcare products 
                        for Nepal's evolving medical needs.
                    </p>
                </div>

                <!-- Modern Tab Navigation -->
                <div class="flex flex-wrap justify-center gap-2 mb-12">
                    <button
                        onclick="switchTab('surgical')"
                        id="tab-surgical"
                        class="tab-button flex items-center space-x-2 px-6 py-4 rounded-xl transition-all duration-300"
                    >
                        ${createIcon('scissors', 'h-5 w-5')}
                        <span class="font-medium">Current Solutions</span>
                    </button>
                    <button
                        onclick="switchTab('nutraceuticals')"
                        id="tab-nutraceuticals"
                        class="tab-button flex items-center space-x-2 px-6 py-4 rounded-xl transition-all duration-300"
                    >
                        ${createIcon('beaker', 'h-5 w-5')}
                        <span class="font-medium">Nutraceuticals 2026</span>
                    </button>
                    <button
                        onclick="switchTab('pharma')"
                        id="tab-pharma"
                        class="tab-button flex items-center space-x-2 px-6 py-4 rounded-xl transition-all duration-300"
                    >
                        ${createIcon('pill', 'h-5 w-5')}
                        <span class="font-medium">Future Pharmaceuticals</span>
                    </button>
                </div>

                <!-- Tab Content -->
                <div class="min-h-[600px]">
                    ${createSurgicalTab()}
                    ${createNutraceuticalsTab()}
                    ${createPharmaTab()}
                </div>
            </div>
        </div>
    `;
}

function createSurgicalTab() {
    return `
        <div id="content-surgical" class="tab-content">
            <div class="space-y-8">
                <div class="text-center mb-12">
                    <h3 class="text-3xl font-semibold text-gray-900 mb-4">Current Surgical Product Portfolio</h3>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        All products meet international quality standards with CE, BIS certification.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${SURGICAL_PRODUCTS.map(category => `
                        <div class="group hover:shadow-xl transition-all duration-300 border rounded-xl bg-gradient-to-br from-white to-gray-50 p-6">
                            <div class="flex items-center space-x-3 mb-6">
                                <div class="p-3 rounded-xl ${category.color} text-white">
                                    ${createIcon('scissors', 'h-6 w-6')}
                                </div>
                                <h4 class="text-lg font-semibold text-gray-900">${category.category}</h4>
                            </div>
                            
                            <div class="space-y-3">
                                ${category.products.map(product => `
                                    <div class="flex items-center space-x-3 p-3 rounded-lg bg-white border border-gray-100">
                                        <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        <span class="text-gray-700 text-sm">${product}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function createNutraceuticalsTab() {
    return `
        <div id="content-nutraceuticals" class="tab-content" style="display: none;">
            <div class="space-y-8">
                <div class="text-center mb-12">
                    <div class="flex items-center justify-center space-x-2 mb-4">
                        ${createIcon('calendar', 'h-5 w-5 text-emerald-600')}
                        <span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">Launching 2026</span>
                    </div>
                    <h3 class="text-3xl font-semibold text-gray-900 mb-4">Nutraceutical Division</h3>
                    <p class="text-gray-600 max-w-3xl mx-auto">
                        Our evidence-based formulations will address Nepal-specific nutritional gaps with 
                        scientifically backed wellness solutions.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${NUTRACEUTICAL_PRODUCTS.map(product => `
                        <div class="group hover:shadow-xl transition-all duration-300 border rounded-xl overflow-hidden">
                            <div class="bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white">
                                <div class="flex items-center space-x-3">
                                    ${createIcon('shield', 'h-8 w-8')}
                                    <div>
                                        <h4 class="text-xl font-semibold">${product.name}</h4>
                                        <span class="bg-white/20 text-white text-sm px-2 py-1 rounded mt-2 inline-block">${product.status}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-600">${product.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="text-center pt-8">
                    <button 
                        onclick="scrollToSection('#contact')"
                        class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl shadow-lg group inline-flex items-center"
                    >
                        Express Early Interest
                        ${createIcon('chevronRight', 'ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform')}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createPharmaTab() {
    return `
        <div id="content-pharma" class="tab-content" style="display: none;">
            <div class="space-y-8">
                <div class="text-center mb-12">
                    <h3 class="text-3xl font-semibold text-gray-900 mb-4">Future Pharmaceutical Expansion</h3>
                    <p class="text-gray-600 max-w-3xl mx-auto">
                        Strategic expansion into pharmaceutical sector with focus on essential medicines and 
                        specialized therapeutic categories.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${PHARMACEUTICAL_PRODUCTS.map(category => `
                        <div class="group hover:shadow-xl transition-all duration-300 border rounded-xl overflow-hidden">
                            <div class="bg-gradient-to-r ${category.color} p-6 text-white">
                                ${createIcon('pill', 'h-8 w-8 mb-3')}
                                <h4 class="text-xl font-semibold">${category.title}</h4>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-600">${category.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function createCSR() {
    return `
        <div id="csr" class="py-24 bg-gray-50">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center mb-20">
                    <div class="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                        Corporate Social Responsibility
                    </div>
                    <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        <em>Healing Beyond Business</em>
                    </h2>
                    <p class="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Our commitment extends beyond distributing medical supplies. We're dedicated to strengthening 
                        Nepal's healthcare ecosystem and building a sustainable future for all.
                    </p>
                </div>

                <!-- Main Initiatives -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    ${CSR_INITIATIVES.map(initiative => `
                        <div class="group hover:shadow-2xl transition-all duration-500 border rounded-xl overflow-hidden bg-white">
                            <!-- Image Header -->
                            <div class="relative h-48 overflow-hidden">
                                <img
                                    src="${initiative.image}"
                                    alt="${initiative.title}"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div class="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                                    ${createIcon('heart', 'h-6 w-6')}
                                    <h3 class="text-xl font-semibold">${initiative.title}</h3>
                                </div>
                            </div>
                            
                            <!-- Content -->
                            <div class="p-6">
                                <p class="text-gray-600 mb-6 leading-relaxed">${initiative.description}</p>
                                
                                <div class="space-y-3">
                                    <h4 class="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                                    ${initiative.activities.map(activity => `
                                        <div class="flex items-start space-x-3">
                                            ${createIcon('checkCircle', 'h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0')}
                                            <span class="text-gray-700 text-sm">${activity}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Impact Metrics -->
                <div class="mb-16">
                    <h3 class="text-3xl font-semibold text-center text-gray-900 mb-12">Our Impact in Numbers</h3>
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        ${IMPACT_METRICS.map(metric => `
                            <div class="text-center border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-6">
                                ${createIcon('target', 'h-10 w-10 text-emerald-600 mx-auto mb-4')}
                                <div class="text-3xl font-bold text-gray-900 mb-2">${metric.value}</div>
                                <h4 class="font-semibold text-gray-900 mb-1">${metric.title}</h4>
                                <p class="text-sm text-gray-600">${metric.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Commitment Statement -->
                <div class="border rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden p-12 text-center">
                    <div class="absolute top-0 left-0 w-full h-full opacity-10">
                        <div class="absolute top-8 left-8 w-32 h-32 bg-white rounded-full"></div>
                        <div class="absolute bottom-8 right-8 w-40 h-40 bg-white rounded-full"></div>
                    </div>
                    <h3 class="text-3xl font-semibold mb-6 text-white relative z-10">Our Commitment to Nepal</h3>
                    <p class="text-xl text-white/95 leading-relaxed max-w-4xl mx-auto relative z-10">
                        At MVTL, we believe that building a healthier Nepal requires more than just distributing medical supplies. 
                        It requires a commitment to education, sustainability, and ensuring that quality healthcare reaches every 
                        corner of our nation. Through our CSR initiatives, we're not just growing a business—we're nurturing 
                        a healthier future for all Nepalis.
                    </p>
                </div>
            </div>
        </div>
    `;
}

function createContact() {
    return `
        <div id="contact" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center mb-20">
                    <div class="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
                        Get in Touch
                    </div>
                    <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
                    <p class="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Ready to partner with Nepal's leading healthcare distribution company? Contact the MVTL team 
                        directly through phone or WhatsApp for immediate assistance with your surgical supply needs.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <!-- Contact Information -->
                    <div class="space-y-6">
                        ${CONTACT_INFO.map(info => `
                            <div class="border rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div class="flex items-start space-x-4">
                                    <div class="p-3 rounded-xl ${info.color} bg-opacity-10">
                                        ${createIcon(info.title === 'Head Office' ? 'building2' : info.title === 'Phone' ? 'phone' : 'clock', `h-6 w-6 ${info.color}`)}
                                    </div>
                                    <div class="flex-1">
                                        <h4 class="font-semibold text-gray-900 mb-2">${info.title}</h4>
                                        ${info.details.map(detail => `
                                            <p class="text-gray-600 text-sm">${detail}</p>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}

                        <!-- WhatsApp Contact -->
                        <div class="border rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div class="flex items-start space-x-4">
                                <div class="p-3 rounded-xl text-green-600 bg-green-100">
                                    ${createIcon('message', 'h-6 w-6')}
                                </div>
                                <div class="flex-1">
                                    <h4 class="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                                    <a href="${COMPANY_DATA.social.whatsapp}" target="_blank" class="text-green-600 hover:text-green-700 font-medium">
                                        Chat with us instantly
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Map Placeholder -->
                        <div class="border rounded-xl shadow-lg overflow-hidden">
                            <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                <div class="text-center">
                                    ${createIcon('mapPin', 'h-12 w-12 text-gray-400 mx-auto mb-3')}
                                    <div class="space-y-1">
                                        <p class="text-gray-600 font-medium">Jalbinayak-06, Chovar</p>
                                        <p class="text-gray-500 text-sm">Kirtipur, Nepal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Call to Action -->
                    <div class="space-y-8">
                        <div class="border rounded-xl shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50 p-8 text-center">
                            <div class="mb-6">
                                ${createIcon('heart', 'h-12 w-12 text-emerald-600 mx-auto mb-4')}
                                <h3 class="text-2xl font-semibold text-gray-900 mb-4">Partner With MVTL</h3>
                                <p class="text-gray-600 mb-6">
                                    Join our network of 250+ healthcare partners across 55+ districts in Nepal. 
                                    Experience reliable supply chains and quality surgical products.
                                </p>
                            </div>
                            
                            <div class="space-y-4">
                                <a href="tel:${COMPANY_DATA.contact.phone}" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                                    ${createIcon('phone', 'mr-2 h-5 w-5')}
                                    Call Now
                                </a>
                                
                                <a href="${COMPANY_DATA.social.whatsapp}" target="_blank" class="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
                                    ${createIcon('message', 'mr-2 h-5 w-5')}
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>

                        <div class="border rounded-xl shadow-lg p-6">
                            <h4 class="font-semibold text-gray-900 mb-4">Why Choose MVTL?</h4>
                            <div class="space-y-3">
                                ${[
                                    'CE & BIS certified products',
                                    '72-hour emergency response',
                                    'Nationwide distribution network',
                                    'Expert technical support'
                                ].map(benefit => `
                                    <div class="flex items-center space-x-3">
                                        ${createIcon('check', 'h-5 w-5 text-emerald-600 flex-shrink-0')}
                                        <span class="text-gray-700 text-sm">${benefit}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createFooter() {
    return `
        <div class="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <!-- Main Footer Content -->
                <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
                    <!-- Company Info - Takes up 2 columns -->
                    <div class="lg:col-span-2 space-y-6">
                        <div class="flex items-center space-x-3">
                            <img 
                                src="${COMPANY_DATA.logo}" 
                                alt="Mediverse Tradelink Logo" 
                                class="h-12 w-auto"
                            />
                            <div>
                                <div class="text-xl font-semibold text-teal-400">Mediverse</div>
                                <div class="text-xl font-semibold text-emerald-400">Tradelink</div>
                                <div class="text-xs text-gray-400">${COMPANY_DATA.tagline}</div>
                            </div>
                        </div>
                        
                        <p class="text-gray-300 leading-relaxed max-w-md">
                            Pioneering healthcare distribution in Nepal. Delivering quality surgical solutions today, 
                            expanding to nutraceuticals and pharmaceuticals for a healthier tomorrow.
                        </p>
                        
                        <!-- Contact Info -->
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3">
                                ${createIcon('mapPin', 'h-5 w-5 text-emerald-400 flex-shrink-0')}
                                <span class="text-gray-300 text-sm">${COMPANY_DATA.contact.address}</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                ${createIcon('phone', 'h-5 w-5 text-emerald-400 flex-shrink-0')}
                                <a href="tel:${COMPANY_DATA.contact.phone}" class="text-gray-300 hover:text-emerald-400 text-sm transition-colors">
                                    ${COMPANY_DATA.contact.phone}
                                </a>
                            </div>
                            <div class="flex items-center space-x-3">
                                ${createIcon('clock', 'h-5 w-5 text-emerald-400 flex-shrink-0')}
                                <span class="text-gray-300 text-sm">${COMPANY_DATA.contact.hours}</span>
                            </div>
                        </div>
                        
                        <!-- Social Links -->
                        <div class="flex space-x-4">
                            <a
                                href="${COMPANY_DATA.social.facebook}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="p-3 rounded-xl bg-white/10 hover:bg-blue-600 text-gray-300 hover:text-white transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a
                                href="${COMPANY_DATA.social.instagram}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="p-3 rounded-xl bg-white/10 hover:bg-pink-600 text-gray-300 hover:text-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.901 8.247 7.152 7.757 8.449 7.757s2.448.49 3.324 1.297c.897.876 1.387 2.027 1.387 3.324s-.49 2.448-1.297 3.324c-.876.897-2.027 1.387-3.324 1.387zm7.718 0c-1.297 0-2.448-.49-3.324-1.297-.897-.876-1.387-2.027-1.387-3.324s.49-2.448 1.297-3.324c.876-.897 2.027-1.387 3.324-1.387s2.448.49 3.324 1.297c.897.876 1.387 2.027 1.387 3.324s-.49 2.448-1.297 3.324c-.876.897-2.027 1.387-3.324 1.387z"/>
                                </svg>
                            </a>
                            <a
                                href="${COMPANY_DATA.social.whatsapp}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="p-3 rounded-xl bg-white/10 hover:bg-green-600 text-gray-300 hover:text-white transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Footer Links - Each takes 1 column -->
                    ${FOOTER_SECTIONS.map(section => `
                        <div>
                            <h4 class="font-semibold text-white mb-4">${section.title}</h4>
                            <ul class="space-y-3">
                                ${section.links.map(link => `
                                    <li>
                                        <button 
                                            onclick="scrollToSection('${link.href}')" 
                                            class="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group text-left"
                                        >
                                            <span>${link.name}</span>
                                            ${createIcon('arrowRight', 'h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity')}
                                        </button>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>

                <div class="border-t border-gray-700 pt-8">
                    <!-- Bottom Footer -->
                    <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 mb-8">
                        <div class="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
                            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" class="hover:text-white transition-colors">Medical Disclaimer</a>
                        </div>
                        <p class="text-sm text-gray-400">
                            © 2025 ${COMPANY_DATA.name} ${COMPANY_DATA.tagline}. All Rights Reserved.
                        </p>
                    </div>

                    <!-- Legal Notice -->
                    <div class="pt-8 border-t border-gray-700">
                        <div class="text-center space-y-2">
                            <p class="text-sm text-gray-400">
                                <strong>Registered Office:</strong> ${COMPANY_DATA.contact.address}
                            </p>
                            <p class="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
                                This website contains information about medical products and services. The information provided 
                                is for healthcare professionals and institutions only. Please consult with qualified medical 
                                professionals before making any healthcare decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}