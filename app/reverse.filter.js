export function Reverse(){
	return function (a) {
		if (typeof a !== 'string') return

			return a
		.split('')
		.reverse()
		.join('')
	}
}