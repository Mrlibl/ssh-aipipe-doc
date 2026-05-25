<template>
  <div class="doc-page">
    <h1>{{ title }}</h1>
    <br />
   <img class="imgw" style="width: 250px;"   src="./../../assets/image/zzcjj/kf.png" alt="" />

  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style scoped>
.api-page {
  width: 100%;
  max-width: 1000px;
  text-align: left;
}

.api-page h1 {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: #1f2937;
  text-align: left;
}

.api-page h2 {
  font-size: 20px;
  margin: 20px 0 12px 0;
  color: #1f2937;
  text-align: left;
}

.api-page h3 {
  font-size: 16px;
  margin: 16px 0 8px 0;
  color: #1f2937;
  text-align: left;
}

.api-page ul {
  margin-left: 20px;
  margin-bottom: 12px;
}

.api-page li {
  font-size: 15px;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 6px;
}

.table-box {
  width: 100%;
  overflow-x: auto;
  margin: 10px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  text-align: left;
}

thead {
  background: #f3f4f6;
}

th,
td {
  border: 1px solid #e5e7eb;
  padding: 12px 14px;
  text-align: left;
  font-size: 14px;
}

th {
  font-weight: 600;
  color: #1f2937;
}

td {
  color: #374151;
}
</style>