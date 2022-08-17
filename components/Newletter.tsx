import { Form } from '../utils/Form';
import { useSubscribeToNewsletter } from '../utils/useSubscribeToNewsletter';

export default function Newsletter() {
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();

  return (
    <div className='flex items-center justify-center xl:mx-32'>
      <div className='rounded-lg border p-6 my-2'>
        <p className='header-2 font-semibold my-2'>
          Subscribe to my newsletter 🔔
        </p>
        <p className='my-2'>
          A periodic update on educational content, what I&apos;m thinking
          about, books, how-tos, and other wonders and such.
        </p>
        <p className='my-2'>No spam — unsubscribe at any time</p>
        <form
          className='relative my-4 space-y-4 md:space-y-0 md:flex'
          onSubmit={subscribe}
        >
          <input
            aria-label='Email for newsletter'
            ref={inputEl}
            placeholder='bobslob@gmail.com'
            type='email'
            autoComplete='email'
            required
            className='block w-full px-4 py-2 mt-1 pr-32 bg-white border-gray-400 rounded-md shadow-sm md:py-3 focus:ring-gray-100'
          />
          <button
            type='submit'
            className='flex items-center justify-center absolute right-2 top-[-11px] sm:top-3 px-2 sm:px-4 sm:w-28 h-8  bg-blue-pastel hover:bg-purple-pastel text-white rounded-md transition duration-300 md:text-base text-xs'
          >
            {form.state === Form.Loading ? (
              <span>loading...</span>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
        <p className='italic'>{form.message}</p>
      </div>
    </div>
  );
}
