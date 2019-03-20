const { User, Post } = require('./models');

async function seed() {
  try {

    const user1 = await User.create({
      name: 'guest',
      email: 'guest@email.com',
      password_digest: 'guest',
      bio: 'guest',
      pro_pic: 'guest'
    })

    const user2 = await User.create({
      name: 'Chucky Cheese',
      email: 'chuckyc@mailinator.com',
      password_digest: 'pizza',
      bio: 'pizza shop guy',
      pro_pic: 'pepperoni'
    })

    const user3 = await User.create({
      name: 'Burger King',
      email: 'burgerk@mailinator.com',
      password_digest: 'burger',
      bio: 'burger shop guy',
      pro_pic: 'patty'
    })

    const user4 = await User.create({
      name: 'Doug Funny',
      email: 'dougf@mailinator.com',
      password_digest: 'anime',
      bio: 'anime shop guy',
      pro_pic: 'cartoon'
    })

    const user5 = await User.create({
      name: 'Homer Simpson',
      email: 'homers@mailinator.com',
      password_digest: 'beer',
      bio: 'brewery guy',
      pro_pic: 'nuke'
    })

    const post1 = await Post.create({
      title: 'Kikoho',
      description: 'triangle shaped blast launched with both hands',
      publicId: 'beam',
    })

    const post2 = await Post.create({
      title: 'Masenko',
      description: 'three balls of light blasted from palms',
      publicId: 'orb',
    })

    const post3 = await Post.create({
      title: 'Mafuba',
      description: 'special beam cannon launched from two fingers',
      publicId: 'drill',
    })

    const post4 = await Post.create({
      title: 'Kamehameha',
      description: 'huge blast launched from fingertips',
      publicId: 'wave',
    })

    const post5 = await Post.create({
      title: 'Milkycannon',
      description: 'white ki attack launched with one hand',
      publicId: 'blast',
    })

    const post6 = await Post.create({
      title: 'Reuben',
      description: 'turkey and cheese on white bread',
      publicId: 'plain',
    })

    const post7 = await Post.create({
      title: 'BLT',
      description: 'bacon lettuce and tomato on bun',
      publicId: 'mainstay',
    })

    const post8 = await Post.create({
      title: 'aloha',
      description: 'pineapple on pizza',
      publicId: 'strange',
    })

    const post9 = await Post.create({
      title: 'meatlovers',
      description: 'assorted meats on a pizza',
      publicId: 'sausage',
    })

    const post10 = await Post.create({
      title: 'albert einstein',
      description: 'theory of relativity',
      publicId: 'physics',
    })

    const post11 = await Post.create({
      title: 'benjamin banneker',
      description: 'almanac',
      publicId: 'math',
    })

    const post12 = await Post.create({
      title: 'linus torvald',
      description: 'linux',
      publicId: 'programming',
    })


    await post1.setUser(user1)
    await post6.setUser(user1)
    await post7.setUser(user1)
    await post8.setUser(user2)
    await post2.setUser(user2)
    await post3.setUser(user3)
    await post9.setUser(user3)
    await post10.setUser(user3)
    await post11.setUser(user3)
    await post4.setUser(user4)
    await post5.setUser(user5)
    await post12.setUser(user5)

    process.exit();
  } catch (e) {
    console.log(e)
  }
}

seed();
