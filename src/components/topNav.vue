<template>
	<div id="topNav" aria-labelledby="topNav">
		<nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom" style="max-height: 60px; overflow-y: hidden; display: flex; justify-content: space-between;">
			<div>
				<a @click.prevent="redirectToHome" class="navbar-brand me-0" style="font-size: 1rem; vertical-align: middle; background-color: white; cursor: pointer;">
					<img src="/images/Logo_3.png" alt="" style="height: 5rem; margin-top: -13px; position: absolute; top: 4px; left: -20px;" class="mx-3" />
					<span style="margin-left: 71px; position: relative; z-index: 10;">
						{{ brandText }}
					</span>
				</a>
			</div>
			<div class="mx-1 login-info">
				<div>
					<div class="d-inline dropdown" id="notificationDropdown" style="cursor: pointer;" data-bs-toggle="dropdown" aria-expanded="true">
						<img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User photo" class="user-photo" style="width: 32px; border-radius: 16px;">
							<i class="fas fa-user-circle me-1 position-relative" style="font-size: 1.7rem; vertical-align: middle;">
								<span class="position-absolute top-0 translate-middle badge  bg-danger" style="right: 6px; font-size: 0.7rem;">
									{{ numberOfNotifications }}
									<span class="visually-hidden">Uleste meldinger</span>
								</span>
							</i>
						</img>
						<span class="me-3" style="vertical-align: middle; color: black;">{{ loggedInPersonName }}</span>
					</div>
					<button class="btn btn-outline-primary" @click.prevent=""><i class="fa-solid fa-arrow-right-from-bracket"></i> Logg ut</button>
				</div>
			</div>
		</nav>
	</div>
</template>
<script lang="ts" setup>
import { onMounted, PropType, ref } from "vue";
import { useRouter } from "vue-router";

defineProps({
	pageHeading: {
		type: String,
		default: () => ""
	}
});

const router = useRouter();

// @ts-ignore
const loggedInPersonName = ref<string>("Ive Iversen");

const brandText = ref<string>("");
const numberOfNotifications = ref<number>(15);

onMounted(async () => {
	brandText.value = "SamStemt Samhandling";
});

function redirectToHome() {
	router.push({ path: '/overview' })
}
</script>