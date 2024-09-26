<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import HeartIcon from './icons/IconHeart.vue'
import EyeIcon from './icons/IconEye.vue'
import WindIcon from './icons/IconWind.vue'
import HugIcon from './icons/IconHug.vue'
import SmileIcon from './icons/IconSmile.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <EyeIcon />
    </template>
    <template #heading>El Brillo de Tus Ojos</template>
    Tus ojos, luceros que al cielo envidian,
    Son faros que guían mi errante sendero,
    Y en su destello, sin duda me brindan,
    La luz que ilumina mi amor sincero.


  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <WindIcon />
    </template>
    <template #heading>El Susurro del Viento</template>
    En cada susurro que el viento murmura,
    Siento tu nombre, mi amor, en el aire,
    Y en cada brisa que en mi piel perdura,
    Te encuentro, mi vida, como un canto suave.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <HugIcon />
    </template>
    <template #heading>El Refugio de Tus Brazos</template>
    Tus brazos, mi amor, son mi refugio fiel,
    Donde encuentro la paz que mi alma anhela,
    Y en cada abrazo, como un lazo de miel,
    Siento tu amor que en mi ser se revela.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SmileIcon />
    </template>
    <template #heading>La Melodía de Tu Risa</template>
    Tu risa, mi vida, es la melodía,
    Que llena de alegría mi corazón,
    Y en cada nota, con dulce armonía,
    Encuentro en tu risa mi inspiración.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <HeartIcon />
    </template>
    <template #heading>La Eternidad de un Beso</template>
    Tus besos, mi amor, son la eternidad,
    Que en un instante detiene el tiempo,
    Y en cada roce, con suavidad,
    Encuentro en tus labios mi amor eterno.
  </WelcomeItem>
</template>
