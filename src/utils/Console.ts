import readline from "readline-sync";

export class Console {
	readInt(question: string): number {
		return Number(readline.question(question));
	}

	readString(question: string): string {
		return readline.question(question);
	}

	writeln(string: string = "") {
		console.log(string);
	}
}
