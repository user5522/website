<script lang="ts">
	import { theme } from '$lib/stores';
	export let style: string;
</script>

<select bind:value={$theme} class={style}>
	<option value="system">System</option>
	<option value="light">Light</option>
	<option value="dark">Dark</option>
</select>
