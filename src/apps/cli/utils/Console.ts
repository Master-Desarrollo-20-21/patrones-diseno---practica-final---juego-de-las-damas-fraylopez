import readline from "readline-sync";

export class Console {
	clear() {
		console.clear();
	}
	readInt(question: string): number {
		return Number(readline.question(question));
	}

	readString(question: string): string {
		return readline.question(question);
	}

	writeln(string: string = "") {
		console.log(string);
	}
	writeInln(string: string = "") {
		process.stdout.write(string);
	}
}
