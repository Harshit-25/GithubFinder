
class GitHub{

	costructor(){

		this.client_id='ec19e8d19c93bf7fcade';
		this.client_secret='f171345878c775ad360885b191cbea11bd18a52f';

	}

	async getUser(user){

		const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile=await profileResponse.json();

		return{
              
              profile
		}
	}
}