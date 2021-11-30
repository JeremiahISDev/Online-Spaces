export default function Example() {
	return (
		<div>
			<nav class="bg-white dark:bg-gray-800  shadow ">
				<div class="max-w-7xl mx-auto px-8">
					<div class="flex items-center justify-between h-16">
						<div class="w-full justify-between flex items-center">
							<a class="flex-shrink-0" href="/">
								<img class="h-12 w-12" src="../assets/Logo.png" alt="Online Spaces" />
							</a>
							<div class="hidden md:block">
								<div class="ml-10 flex items-baseline space-x-4">
									<a class="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
										Home
                            </a>
									<a class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/Pricing">
										Pricing
                            </a>
									<a class="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/contact">
										Contact
                            </a>
									<a class="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/aboutus">
										About Us
                            </a>
									<a class="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/signup">
										<button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
											Try One Free Meeting!
                                </button>
									</a>
								</div>
							</div>
						</div>
						<div class="block">
							<div class="ml-4 flex items-center md:ml-6">
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>

	)
}
