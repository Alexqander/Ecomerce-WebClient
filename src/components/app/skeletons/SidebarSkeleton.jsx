export default function SidebarSkeleton() {
	return (
		<div className="fixed top-16 h-[calc(100vh-60px)] inset-y-0 left-0">
			<div className="flex justify-end px-5 pt-5 sm:hidden">
				<div className="animate-pulse h-8 w-8 bg-gray-400 rounded"></div>
			</div>
			<aside className="flex-col w-64 px-5 py-8 overflow-y-auto bg-background border-r rtl:border-r-0 rtl:border-l dark:bg-background dark:border-slate-700">
				<div className="animate-pulse font-montserrat font-semibold h-8 bg-gray-400 rounded w-1/2"></div>
				<div className="flex flex-col justify-between flex-1 mt-6">
					<nav className="-mx-3 space-y-6 ">
						<div className="space-y-3 ">
							<div className="animate-pulse px-3 h-4 bg-gray-400 rounded w-1/4"></div>
							<div className="flex items-center px-3 py-2 space-x-4">
								<div className="animate-pulse h-6 w-6 bg-gray-400 rounded"></div>
								<div className="animate-pulse h-4 bg-gray-400 rounded w-3/4"></div>
							</div>
							<div className="flex items-center px-3 py-2 space-x-4">
								<div className="animate-pulse h-6 w-6 bg-gray-400 rounded"></div>
								<div className="animate-pulse h-4 bg-gray-400 rounded w-3/4"></div>
							</div>
						</div>
						<div className="space-y-3 ">
							<div className="animate-pulse px-3 h-4 bg-gray-400 rounded w-1/4"></div>
							<div className="flex items-center px-3 py-2 space-x-4">
								<div className="animate-pulse h-6 w-6 bg-gray-400 rounded"></div>
								<div className="animate-pulse h-4 bg-gray-400 rounded w-3/4"></div>
							</div>
						</div>
					</nav>
				</div>
			</aside>
		</div>
	);
}
