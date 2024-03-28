import Header from "@/components/Header";

export default function Home() {
	const url = "https://api.api-ninjas.com/v1/thesaurus?word=crazy";
	const options = {
		method: "GET",
		headers: {
			"X-Api-Key": "ck3T3oJerkxpJohbEz7n5w==XtlGJQpWMVMTuUQ9",
		},
	};

	async function GetThesaurus() {
		try {
			const response = await fetch(url, options);
			const result = await response.json();

			// Get limited synonyms/antonyms instead of full list
			const limitedSynonyms = result.synonyms.slice(0, 10).join(", ");
			const limitedAntonyms = result.antonyms.slice(0, 10).join(", ");

			return (
				<div className="flex justify-center">
					<div className="flex flex-col m-4 p-4 border border-blue-800 shadow-md shadow-slate-400">
						<h3 className="text-xl text-center">
							Word:{" "}
							{result.word.charAt(0).toUpperCase() + result.word.substring(1)}
						</h3>
						<p className="text-left">Synonyms: {limitedSynonyms}</p>
						<p>Antonyms: {limitedAntonyms}</p>
					</div>
				</div>
			);
		} catch (error) {
			console.error(error);
			return (
				<div>
					<span>Error Pulling Data</span>
				</div>
			);
		}
	}

	return (
		<>
			<Header />
			<GetThesaurus />
		</>
	);
}