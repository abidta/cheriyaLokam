import mongoose, { isValidObjectId } from 'mongoose'
import Post from '../models/postModel.js'
import User from '../models/userModel.js'
import createError from 'http-errors'
import { checkObjectId } from '../helpers/helper.js'

export const user = (req, res) => {
  console.log(req.userId)
  res.json('logged a valid user')
}

export const getUserProfile = async (req, res) => {
  try {
    if (req.params?.username) {
      let userId = await User.exists({ username: req.params.username })
      if (userId) {
        let userPosts = await User.find({ _id: userId }, '-password')
          .populate({
            path: 'posts',
            select: '-user',
          })
          .exec()
        return res.json(userPosts)
      }
      return res.status(404).json({ message: 'no user found' })
    }
  } catch (e) {
    res.status(500).send(e.message)
  }
}
export const updateUserDeatails = async (req, res) => {
  const { name } = req.body
  let isUpdated = await User.updateOne({ _id: req.userId }, { fullName: name })
  console.log(isUpdated)
  res.json(isUpdated.acknowledged)
}
export const updatePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body
  console.log(req.body)
  console.log(oldPassword, 'old')
  try {
    const [user] = await User.find({ _id: req.userId })
    console.log(user)
    let isValid = await user.matchPassword(oldPassword)
    console.log(isValid)
    if (!isValid) {
      throw new Error('password doesnt match ')
    }
    user.password = newPassword
    await user.save()
    res.status(200).json('update successfully')
  } catch (e) {
    res.status(400).json(e.message)
  }
}
