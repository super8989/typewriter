const sentence = 'hello there from lighthouse labs';

// for (const char of sentence) {
// 	setTimeout(() => {
// 		process.stdout.write(char);
// 	}, 1000);
// }

// setTimeout(() => {}, timeout);

for (let i = 0; i < sentence.length; i++) {
	setTimeout(() => {
		process.stdout.write(sentence[i]);

		if (i === sentence.length - 1) {
			console.log('');
		}
	}, i * 50);
}

// OR
// const sentence = 'hello there from lighthouse labs' + '\n';
// and then no need for if statement in the loop
