<template>
  <div v-if="visible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">X</button>
      <h2 class="modal-title">Años pasados</h2>
      <ul class="styled-list">
        <li>
          <a href="https://ediervillaneda.github.io/clarita2020/" target="_blank">Clarita 2020</a>
        </li>
        <li>
          <a href="https://ediervillaneda.github.io/clarita2021/" target="_blank">Clarita 2021</a>
        </li>
        <!-- <li>
          <a href="https://ediervillaneda.github.io/claris2022/" target="_blank">Clarita 2022</a>
        </li> -->
        <li>
          <a href="https://ediervillaneda.github.io/clarita2023/" target="_blank">Clarita 2023</a>
        </li>
        <li>
          <a href="https://ediervillaneda.github.io/clarita2024/" target="_blank">Clarita 2024</a>
        </li>
        <!-- <li>
          <a href="https://clarita.edier.site/" target="_blank">Clarita 2025</a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-title {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.styled-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.styled-list li {
  margin-bottom: 10px;
}

.styled-list li:last-child {
  margin-bottom: 0;
}

.styled-list a {
  text-decoration: none;
  color: #3498db;
  font-weight: bold;
  display: block;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.styled-list a:hover {
  background-color: #3498db;
  color: #ffffff;
}
</style>
