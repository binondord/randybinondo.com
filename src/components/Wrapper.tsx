const Wrapper = ({title, children}:any) => {
    return (
        <>
        <div className={`w-full max-w-full px-3 mt-0 mb-4 lg:w-7/12 lg:flex-none text-black`}>
            <div className={`border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border`}>
              <div className={`border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0`}>
                <h6 className={`capitalize dark:text-black`}>{title}</h6>
                {/*<p className={`mb-0 text-sm leading-normal dark:text-black dark:opacity-60`}>
                  <i className={`fa fa-arrow-up text-emerald-500" aria-hidden="true`}></i>
                  <span className={`font-semibold`}>4% more</span> in 2021
                </p>*/}
              </div>
              <div className={`flex-auto p-4`}>
                <div>
                    {children}
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default Wrapper;