const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      const message = error.details[0].message;
      return res.status(400).json({
        success: false,
        message: message
      });
    }
    
    next();
  };
};

module.exports = validate;