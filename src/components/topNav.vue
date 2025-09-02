<template>
	<div id="topNav" aria-labelledby="topNav">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div>
				<a href="/" class="navbar-brand me-0" style="font-size: 1rem; text-transform: uppercase; vertical-align: middle;">
					<!-- <img src="@/images/logo-paakobla.png" alt="" style="height: 2rem; margin-top: -5px;" class="mx-3" /> -->
					{{ brandText }}
				</a>
				<h1 class="navbar-brand d-inline" style="font-size: 1rem; vertical-align: middle; text-transform: uppercase;" v-if="pageHeading">&nbsp; - &nbsp;{{ pageHeading }}</h1>
			</div>

			<!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button> -->

			<!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
				<!-- <ul class="navbar-nav me-auto">
					<li class="nav-item dropdown" v-if="navigationDropdownLinks.length > 0">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: #F5F8F5;">
							{{ navigatonDropdownTitle }}
						</a>
						<div class="dropdown-menu dropdown-menu-dark">
							<a class="dropdown-item my-1 navigationDropdownItem" v-for="item in navigationDropdownLinks" :href="item.link" :key="item.title">{{ item.title }}</a>
						</div>
					</li>
				</ul> -->
				<div class="mx-1 login-info">
					<div>
						<!-- <div class="d-inline dropdown" id="notificationDropdown" style="cursor: pointer;" data-bs-toggle="dropdown" aria-expanded="true"> -->
						<div class="d-inline dropdown" id="notificationDropdown" style="cursor: pointer;" data-bs-toggle="dropdown" aria-expanded="true">
							<i class="fas fa-user-circle me-1 position-relative" style="font-size: 1.7rem; vertical-align: middle;">
								<span class="position-absolute top-0 translate-middle badge  bg-danger" style="right: 6px; font-size: 0.7rem;">
									{{ numberOfNotifications }}
									<!-- <span class="visually-hidden">unread messages</span> -->
								</span>
							</i>
							<span class="me-3" style="vertical-align: middle; color: black;">{{ loggedInPersonName }}</span>
							<!-- <ul class="dropdown-menu" style="max-width: 250px">
								<li>
									<h6 class="dropdown-header">Nye oppdrag</h6>
								</li>
								<div v-if="isLoading" class="p-1 my-1 fs-1 text-center w-100">
									<i class="fas fa-spinner fa-spin"></i>
								</div>
								<div v-if="!isLoading">
									<li v-for="oppdrag in newOppdrags" :key="oppdrag.id" @click="openOppdrag(oppdrag.id)" class="overflow-hidden">
										<a class="dropdown-item my-auto d-flex">O{{ oppdrag.id }} - Oppdrag</a>
									</li>
								</div>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" @click="openMyOppdrags" href="#">Vis oppdrag</a></li>
							</ul> -->
						</div>
						<!-- <div v-else class="d-inline">
							<i class="fas fa-user-circle me-1 position-relative" style="font-size: 1.7rem; vertical-align: middle;"></i>
							<span class="me-3" style="vertical-align: middle;">{{ loggedInPersonName }}</span>
						</div> -->
						<!-- <a v-if="hasMoreThanOneCustomer" href="/Access/RequestChangeCustomer" class="btn btn-outline-secondary me-2">
							<i class="fa-regular fa-buildings"></i> {{ customerName }}
						</a> -->
						<a href="/Access/Logout" class="btn btn-outline-secondary"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logg ut</a>
					</div>
					<!-- <div v-if="isLoggedIn === false">
						<a href="/Login" class="btn btn-outline-secondary"><i class="fa-solid fa-arrow-right-to-bracket"></i> Logg inn</a>
					</div> -->
				</div>
			<!-- </div> -->
		</nav>
	</div>
</template>
<script lang="ts" setup>
import { onMounted, PropType, ref } from "vue";

defineProps({
	navigatonDropdownTitle: {
		type: String,
		default: () => ""
	},
	navigationDropdownLinks: {
		type: Array as PropType<Array<{ title: string, link: string }>>,
		default: () => [],
	},
	navigationItems: {
		type: Array as PropType<Array<{ title: string, link: string }>>,
		default: () => [],
	},
	additionalNavigationItems: {
		type: Array as PropType<Array<{ title: string, link: string }>>,
		default: () => [],
	},
	pageHeading: {
		type: String,
		default: () => ""
	},
	testText: {
		type: String,
		default: () => ""
	}
});

// @ts-ignore
const loggedInPersonName = ref<string>("Ive Iversen");
// @ts-ignore
const currentUrl = window.location.href;
// @ts-ignore
const customerName = ref<string>("Velg kommune");

const brandText = ref<string>("");
const numberOfNotifications = ref<number>(15);

onMounted(async () => {
	brandText.value = "Påkobla Samstemt";
});
</script>