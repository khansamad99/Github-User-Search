class Github{
    constructor()
    {
        this.cliend_id = '56c7463c6111afebe398'
        this.client_secret =  'b81eb411e4f67ac630366d6702b3bc89c4ccfb11'
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getuser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.cliend_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.cliend_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos 
        }

    }

}