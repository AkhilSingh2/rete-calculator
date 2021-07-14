<template>
        <div id="rete"/>
</template>

<script>
import { createFlowEditor } from "@/editor.js";
import "@/flow.css";

export default {
    mounted() {
        createFlowEditor();
    }
};
</script>

<style>
#app {
    width: 95%;
    height: 600px;
}

#rete {
    margin: 0 auto;
    width: 99%;
    height: 100%;
    border: 1px solid #333;
}
</style>
