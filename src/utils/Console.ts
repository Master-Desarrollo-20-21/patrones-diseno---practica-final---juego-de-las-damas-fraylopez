import readline from "readline";

export class Console {
	private readonly rl: readline.Interface;
	constructor() {
		this.rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
	}
	async readInt(question: string): Promise<number> {
		return await new Promise(resolve => {
			this.rl.question(question, (answer) => {
				resolve(Number(answer));
				this.rl.close();
			});
		})
	}
	async readString(question: string): Promise<string> {
		return await new Promise(resolve => {
			this.rl.question(question, (answer) => {
				resolve(answer);
				this.rl.close();
			});
		})
	}

	writeln(string: string = "") {
		console.log(string);
	}

}
