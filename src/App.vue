<template>
	<div>
		<div class="navi">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<router-link
					to="/"
					class="navbar-brand"
				>LOGO </router-link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div
					class="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul class="navbar-nav mr-auto">

						<li class="nav-item">
							<router-link
								to="/"
								class="nav-link"
							>home </router-link>
						</li>
						<li class="nav-item">
							<router-link
								to="/about"
								class="nav-link"
							>about</router-link>
						</li>

					</ul>
					<form class="form-inline my-2 my-lg-0 navbar-nav">

						<router-link
							to="/login"
							class="nav-link co-bag"
						>Login</router-link>

						<router-link to="/register"> <button
								class="btn btn-outline-primary my-2 my-sm-0 btn-pri"
								type="submit"
							>Register</button></router-link>

						<button
							class="btn btn-outline-danger my-2 my-sm-0 btn-pri mgl5"
							@click="logout"
						>logout</button>

					</form>
				</div>
			</nav>
		</div>
	</div>
	<router-view />
</template>


<script>
	export default {
		methods: {
			logout: function() {
				localStorage.removeItem("email");
				localStorage.removeItem("pass");
			}
		}
	};
</script>


<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
	.mgl5 {
		margin-left: 5px;
	}
</style>
